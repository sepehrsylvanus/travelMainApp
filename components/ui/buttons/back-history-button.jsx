"use client"
import React from 'react';
import Image from "next/image";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";

function BackHistoryButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className={"w-[32px] h-[32px] me-3 rounded-md bg-white active:scale-90 flex items-center justify-center hover:bg-gray-50 duration-200"}>
            <Image src={ArrowLeftIcon} alt={"arrow-left"} width={15} height={15}/>
        </button>
    );
}

export default BackHistoryButton;