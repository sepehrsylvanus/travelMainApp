"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { verifyToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = searchParams.get('token');

        if (token) {
            const verifiedUser = verifyToken(token);
            if (verifiedUser) {
                setUser(verifiedUser);
            } else {
                router.push('/login');
            }
        } else {
            router.push('/login');
        }
    }, [searchParams, router]);

    return (
        <div>
            {user && <p>username: {user.username}</p>}
        </div>
    );
};

export default Page;
