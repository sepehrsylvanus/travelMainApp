import React from 'react';
import Image from "next/image";
import PersonImage from "@/public/images/person-image.svg";
import ItalyIcon from "@/public/flag/italy-flag-icon.svg";
import CloseRedIcon from "@/public/icons/close-red-icon.svg";
import TickBlueIcon from "@/public/icons/tick-blue-icon.svg";
import MessageIcon from "@/public/icons/message-request-icon.svg";
import Link from "next/link";

function RequestCard({locale , trans}) {
    return (
        <section className="w-full flex flex-wrap py-4 bg-white">
            {
                Array?.from({length: 10}).map((_, index) => (
                    <div key={index} className="w-1/2 mb-8 flex items-center justify-center">
                        <figure className="w-[150px] h-[197px] flex flex-wrap relative">
                            <Image src={PersonImage} alt={''} className={"rounded-xl"} width={150} height={197}/>
                            <div className="w-full p-1.5 flex flex-wrap items-center absolute top-0 justify-between">
                                <Link href={`/${locale}/friend-profile`} passHref prefetch  className="bg-white rounded-2xl bg-opacity-90 text-[12px] text-gray-600 px-2 p-1">
                                    Mehdi
                                </Link>
                                <Image src={ItalyIcon} alt={"italy"} width={16} height={16}/>
                            </div>
                            <div className='w-full flex items-center justify-between absolute bottom-1/4 p-3 '>
                                <button>
                                    <Image src={CloseRedIcon} alt={'close-red'} width={20} height={20}/>
                                </button>
                                <button>
                                    <Image src={TickBlueIcon} alt={'tick'} width={20} height={20}/>
                                </button>
                            </div>

                            <div className="w-full flex flex-wrap absolute bottom-3 h-[48px] p-2">
                                <div className="w-full flex flex-wrap rounded-xl border border-stone-400 py-1.5 px-2">
                                    <figure className="w-full flex items-center gap-1">
                                        <Image src={MessageIcon} alt={'message'} width={20} height={20}/>
                                        <figcaption className="text-[10px] grow text-white line-clamp-2">
                                            {trans("hey hows your plan for tomorrow?")}
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </figure>
                    </div>
                ))
            }

        </section>
    );
}

export default RequestCard;