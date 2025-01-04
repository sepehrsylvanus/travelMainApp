import { createHash, createHmac } from 'crypto';
import jwt from 'jsonwebtoken';


export function verifyTelegramAuth(authData) {
    const { hash, ...data } = authData;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
        throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }

    const dataCheckString = Object.keys(data)
        .sort()
        .map((key) => `${key}=${data[key]}`)
        .join('\n');

    const secret = createHash('sha256').update(token).digest();
    const calculatedHash = createHmac('sha256', secret).update(dataCheckString).digest('hex');

    return calculatedHash === hash;
}

export function generateToken(user_id, username) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not set in environment variables');
    }

    return jwt.sign({ user_id, username }, jwtSecret, { expiresIn: '1h' });
}

export function verifyToken(token) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error('JWT_SECRET is not set in environment variables');
    }

    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        return null;
    }
}