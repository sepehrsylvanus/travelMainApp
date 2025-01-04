import React from 'react';
import Image from "next/image";
import PersonAvatar from "@/public/images/person-icon.svg";

function TextMessageBox({trans}) {
    return (
        <section className="h-[76svh] overflow-y-auto">
            {
                Array?.from({length : 10})?.map((item, index) => (
                    <section key={index} className="w-full pt-7 px-4 flex justify-between items-stretch">
                        <div className="w-4/5 flex overflow-hidden">
                            <div className='flex w-full  gap-2'>
                                <figure
                                    className='flex w-[50px] pt-0.5 rounded-full h-[50px] items-start justify-center'>
                                    <Image src={PersonAvatar} alt={"person-icon"} width={22} height={22}/>
                                </figure>
                                <div className={"grow flex justify-start flex-wrap"}>
                                    <div className="w-full font-bold">Mehdi</div>
                                    <div className="w-full text-gray-500 text-[12px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut feugiat
                                    </div>
                                    <div className="w-full flex">
                                        <button
                                            className="hover:text-blue-500 duration-100 text-sm py-1  rounded-2xl text-blue-400">
                                            {trans("Replay")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/5 pt-0.5 flex flex-wrap items-start justify-end">
                            <div className="w-full text-gray-400 text-[10px] text-end">
                                20 {trans("hours ago")}
                            </div>
                        </div>
                    </section>
                ))
            }
        </section>
    );
}

export default TextMessageBox;