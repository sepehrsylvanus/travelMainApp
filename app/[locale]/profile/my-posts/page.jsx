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
            className="w-full bg-gradient-to-b from-gray-50 to-white page-up-animation  min-h-svh  bg-white p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg">
                    {trans("My Posts")}
                </div>
                <div className="w-1/4"></div>
            </div>
            <section className="w-full flex space-y-3 flex-wrap mt-5 p-3">
                {
                    Array.from({length: 10}).map((item, i) => (
                        <article key={i} className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow ">
                            <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                                <figure className="w-auto gap-2 flex">
                                    <Image loading={'lazy'} src={PersonImage} alt={''} width={36} height={36}/>
                                    <figcaption className='w-1/2 flex flex-wrap'>
                                        <h5 className="text-sm">Mehdi</h5>
                                        <h6 className="text-[10px] text-gray-500">Italy</h6>
                                    </figcaption>
                                </figure>
                                <div className="w-auto text-gray-500 font-light text-[10px]">
                                    20 {trans("hours ago")}
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap p-2">
                                <h4 className="w-full flex-wrap text-lg font-bold">
                                    Lorem ipsum
                                </h4>
                                <p className="w-full flex text-justify py-2 font-medium text-[12px] text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut feugiat arcu. Donec
                                    eu purus nulla. Aliquam ac ipsum sodales, semper diam a, euismod tortor. Proi
                                </p>
                            </div>

                            <div className="w-full flex flex-wrap items-center justify-end p-2 ">
                                <button
                                    className="hover:bg-gray-100 gap-1 text-sm text-gray-600 font-medium p-1 duration-300 rounded-lg flex items-center justify-center">
                                    <Image src={CommentIcon} alt={'comment-icon'} width={22} height={22}/>
                                    22
                                </button>
                                <button
                                    className="hover:bg-gray-100 gap-1 text-sm text-gray-600 font-medium p-1 duration-300 rounded-lg flex items-center justify-center">
                                    <Image src={HeartIcon} alt={'heart-icon'} width={22} height={22}/>
                                    22
                                </button>
                            </div>

                        </article>
                    ))
                }
            </section>
            <div className="w-full flex items-center justify-center py-3 text-gray-300 font-medium text-[12px]">
                {trans("Swipe right to delete")}
            </div>
        </section>
    );
}

export default Page;