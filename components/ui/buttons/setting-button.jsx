import React from 'react';
import Link from "next/link";
import Image from "next/image";
import SettingIcon from "@/public/icons/setting-icon.svg";

function SettingButton({locale}) {
    return (
        <Link href={`/${locale}/profile/setting`} prefetch={true} passHref className="hover:bg-gray-50 rounded-lg p-1 duration-100">
            <Image src={SettingIcon} alt={'setting-icon'} width={20} height={20} />
        </Link>
    );
}

export default SettingButton;