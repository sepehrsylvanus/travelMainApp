"use client"
import React from 'react';
import Image from "next/image";
import AlbaniaBeach from "@/public/images/albania-beach.svg"
import BackHistoryButton from "@/components/ui/buttons/back-history-button";
import CountryTabs from "@/components/ui/tabs/countryTabs";
import {useTranslations} from "next-intl";
function Page() {
    const trans = useTranslations("translate")
    return (
        <section className="w-full flex page-up-animation pb-16 bg-white flex-wrap">
            <figure className="flex flex-wrap mb-4 relative w-full md:w-[375.81px] h-[228.12px]">
                <Image src={AlbaniaBeach} alt={"albania-beach"} className="w-full" width={375.81} height={228.12}/>
                <div className='absolute top-5 left-5'>
                    <BackHistoryButton />
                </div>
            </figure>
            <div className="w-full flex flex-wrap  items-center p-3 px-6  ">
                <div className="w-2/3 flex flex-wrap">
                    <div className="w-full text-lg font-medium">
                        {trans("Albania")}
                    </div>
                    <div className="w-full text-[12px] text-gray-400">
                        390 {trans("followers")}
                    </div>
                </div>
                <div className="w-1/3 px-2 flex items-center justify-end">
                    <button className="p-2 rounded-lg border border-blue-400 text-blue-400 font-medium">
                        {trans('Follow')}
                    </button>
                </div>
                <div className="w-full border-b mt-5"></div>
            </div>
            <CountryTabs trans={trans}/>
        </section>
    );
}

export default Page;


