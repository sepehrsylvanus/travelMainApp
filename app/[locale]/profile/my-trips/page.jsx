import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Link from "next/link";
import Image from "next/image";
import PlusIcon from "@/public/icons/plus-icon.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";

import TurkeyFlag from "@/public/flag/turkey.svg"
import {useTranslations} from "next-intl";

function Page({params}) {
    const trans = useTranslations("translate")
    return (
        <section className="w-full page-up-animation min-h-svh  p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg">{trans("My Trips")}</div>
                <div className="w-1/4"></div>
            </div>

            <div className="w-full p-2 rounded-xl flex flex-wrap my-5 border">
                <Link href={`/${params?.locale}/profile/my-trips/create`} passHref prefetch={true}
                      className="w-full flex justify-between items-stretch">
                    <div className="w-3/4 overflow-hidden">
                        <div className='flex w-full gap-2'>
                            <figure
                                className='flex w-[50px] rounded-full h-[50px] items-center justify-center'>
                                <Image src={PlusIcon} alt={"plus-icon"} width={30} height={30}/>
                            </figure>
                            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
                                <div className="font-bold">{trans('Add new Trip')}</div>
                                <div className="w-full text-[12px] text-gray-500 font-bold">{trans("Add new Trip")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-wrap items-center justify-end">
                        <button className="p-2 rounded-lg hover:bg-gray-50 duration-100">
                            <Image src={ArrowLeftIcon} alt={"arrow-left-icon"} className="rotate-180" width={14}
                                   height={14}/>
                        </button>
                    </div>
                </Link>
            </div>


            <section className="w-full flex flex-wrap space-y-4 content-start">
                {
                    Array?.from({length : 5}).map((item, index) => (
                        <div key={index} className="w-full p-2 rounded-xl flex flex-wrap  bg-white shadow-sm">
                            <Link href={`/${params?.locale}/profile/my-trips/create`} passHref prefetch={true}
                                  className="w-full flex justify-between items-stretch">
                                <div className="w-3/4 overflow-hidden">
                                    <div className='flex w-full gap-2'>
                                        <figure
                                            className='flex w-[50px] rounded-full h-[50px] items-center justify-center'>
                                            <Image src={TurkeyFlag} alt={"turkey-icon"} width={30} height={30}/>
                                        </figure>
                                        <div className={"w-2/3 flex flex-wrap truncate items-center"}>
                                            <div className="font-bold">Istanbul</div>
                                            <div className="w-full text-[12px] text-gray-500 font-bold">Jul 21 - jul
                                                27
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/4 flex flex-wrap items-center justify-end">
                                    <button className="p-2 rounded-lg hover:bg-gray-50 duration-100">
                                        <Image src={ArrowLeftIcon} alt={"arrow-left-icon"} className="rotate-180"
                                               width={14}
                                               height={14}/>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </section>

            <div className="w-full flex items-center justify-center text-gray-300 my-4">
                {trans("Swipe right to delete")}
            </div>


        </section>
    );
}

export default Page;