import { verifyTelegramAuth, generateToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

/**
 * for handle request from telegram user
 * @param req
 * @returns {Promise<NextResponse<{success: boolean, message: string}>|NextResponse<unknown>>}
 * @constructor
 */

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get('user_id');
    const username = searchParams.get('username');
    const hash = searchParams.get('hash');

    if (!user_id || !username || !hash) {
        return NextResponse.json({ success: false, message: 'The information is insufficient.' }, { status: 400 });
    }

    const isValid = verifyTelegramAuth(Object.fromEntries(searchParams.entries()));

    if (!isValid) {
        return NextResponse.json({ success: false, message: 'The information is invalid.' }, { status: 403 });
    }

    const token = generateToken(user_id, username);

    const redirectUrl = new URL(`/dashboard?token=${token}`, req.url);
    return NextResponse.redirect(redirectUrl);
}
