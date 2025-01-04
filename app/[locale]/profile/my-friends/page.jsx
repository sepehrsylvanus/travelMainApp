import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import CommentIcon from "@/public/icons/comment-icon.svg";
import HeartIcon from "@/public/icons/heart-outline-icon.svg";
import {useTranslations} from "next-intl";

function Page() {
    const trans = useTranslations("translate")
    return (
        <section
            className="w-full bg-gray-50  page-up-animation  min-h-screen p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg">
                    {trans("My Friends")}
                </div>
                <div className="w-1/4"></div>
            </div>
            <section className="w-full flex space-y-1 flex-wrap mt-5 p-3">
                {
                    Array.from({length: 10}).map((item, i) => (
                        <section key={i} className="w-full p-2 flex flex-wrap rounded-xl ">
                            <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                                <figure className="w-auto gap-2 flex">
                                    <Image src={PersonImage} alt={''} width={36} height={36}/>
                                    <figcaption className='w-1/2 flex flex-wrap'>
                                        <h5 className="text-sm">Mehdi</h5>
                                        <h6 className="text-[10px] text-gray-500">Italy</h6>
                                    </figcaption>
                                </figure>
                                <div className="w-auto text-gray-500 font-light text-[10px]">
                                    <button className="bg-white text-[12px] p-2.5 rounded-xl text-red-400 font-bold">
                                        {trans("Remove")}
                                    </button>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </section>
        </section>
    );
}

export default Page;