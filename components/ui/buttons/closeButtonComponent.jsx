"use client"
import React from 'react';
import Image from "next/image";
import CloseIcon from "@/public/icons/close-icon.svg";

function CloseButtonComponent() {
    return (
        <button onClick={() => window.history.back()}>
            <Image src={CloseIcon} alt="" width={32} height={32}/>
        </button>
    );
}

export default CloseButtonComponent;