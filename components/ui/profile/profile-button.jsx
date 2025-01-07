import React from 'react';
import Link from "next/link";
import Image from "next/image";
import PersonAvatar from "@/public/images/person-icon.svg";
import BlueTick from "@/public/icons/verify-icon.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";

function ProfileButton({ locale  }) {
    
    return (
        <div className="w-full flex flex-wrap py-8">
            <Link href={`/${locale}/friend-profile`} scroll={false} prefetch className="w-full cursor-pointer flex justify-between items-stretch">
                <div className="w-3/4 overflow-hidden">
                    <div className="flex w-full gap-2">
                        <figure className='flex w-[50px] rounded-full h-[50px] items-center justify-center'>
                            <Image src={PersonAvatar} alt="person-icon" width={50} height={50} />
                        </figure>
                        <div className="w-2/3 flex flex-wrap truncate items-center">
                            <div className="font-bold">Mehdi</div>
                            <Image src={BlueTick} alt="verify-icon" width={16} height={16} />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-wrap items-center justify-end">
                    <Image src={ArrowLeftIcon} alt="arrow-left-icon" className="rotate-180" width={14} height={14} />
                </div>
            </Link>
        </div>
    );
}

export default ProfileButton;
   
