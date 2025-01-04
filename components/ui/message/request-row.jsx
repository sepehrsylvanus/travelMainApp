import React from 'react';
import Image from "next/image";
import RequestIcon from "@/public/icons/request-user-icon.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";
import Link from "next/link";

function RequestRow({locale , trans}) {
    return (
        <Link href={`/${locale}/message/request`} prefetch={true} passHref className={"w-full flex flex-wrap"}>
            <div className="w-3/4 overflow-hidden">
                <div className='flex flex-wrap items-center gap-2'>
                    <figure
                        className='flex w-[50px] rounded-full bg-gray-100 h-[50px] items-center justify-center'>
                        <Image src={RequestIcon} alt={"request-user-icon"} width={20} height={20}/>
                    </figure>
                    <figcaption className="text-lg font-bold">
                        {trans("requests")}
                    </figcaption>
                </div>
            </div>
            <div className="w-1/4 flex items-center justify-end">
                <span className="text-gray-600 font-medium">2</span>
                <button className="p-2 rounded-lg hover:bg-gray-50 duration-100">
                    <Image src={ArrowLeftIcon} alt={"arrow-left-icon"} className="rotate-180" width={14} height={14}/>
                </button>
            </div>
        </Link>
    );
}

export default RequestRow;