import React from 'react';
import Image from "next/image";
import NotificationIcon from "@/public/icons/notification-icon.svg";
import MessageIcon from "@/public/icons/message-icon.svg";
import AvatarIcon from "@/public/icons/avatar-icon.svg";
import Link from "next/link";

function NavigationTop({content = '' , locale = 'en'}) {
    return (
        <nav className='w-full flex justify-between items-center mt-2 p-6'>
            <strong>{content}</strong>
            <div className="w-[100px] h-[32px] flex items-center justify-end gap-2">
                <Link scroll={false} passHref href={`/${locale}/message`}>
                    <Image width={20} height={20} src={MessageIcon} alt={"messages"}/>
                </Link>
                <Link href={`/${locale}/profile/`} passHref prefetch={true}>
                    <Image width={30} height={30} src={AvatarIcon} alt={"avatar"} className="rounded-full"/>
                </Link>
            </div>
        </nav>
    );
}

export default NavigationTop;