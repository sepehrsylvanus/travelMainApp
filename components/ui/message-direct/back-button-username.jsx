import React from 'react';
import BackHistoryButton from "@/components/ui/buttons/back-history-button";
import Image from "next/image";
import DirectIcon from "@/public/images/direct-avatar.svg";
import Link from "next/link";

function BackButtonUsername() {
    return (
        <section className="w-full flex py-3 flex-wrap items-center justify-between ">
            <div className="w-1/4 flex px-4 items-start justify-start">
                <BackHistoryButton/>
            </div>
            <Link href={"/friend-profile"} passHref prefetch  className="w-2/4 gap-3 capitalize flex items-center justify-center font-medium">
                <Image src={DirectIcon} alt={"direct icon"} width={36} height={36}/>
                hadis
            </Link>
            <div className="w-1/4"></div>
        </section>
    );
}

export default BackButtonUsername;