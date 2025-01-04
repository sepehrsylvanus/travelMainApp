import React from 'react';
import NavigationTop from "@/components/ui/navigation/navigation-top";
import SearchBox from "@/components/ui/search-box/search-box";
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import ItalyFlag from "@/public/flag/italy-flag-icon.svg";
import ArrowRightIcon from "@/public/icons/arrow-right-icon.svg";


import SectionImage from "@/public/images/create-image-section.svg"
import PageTitleBackButton from "@/components/ui/page-title-back-button/page-title-back-button";
import InputLabel from "@/components/ui/inputs/input-label";
import {useTranslations} from "next-intl";

function Page() {
    const trans = useTranslations("translate")
    return (
        <section className="w-full flex pb-24 flex-wrap content-start">
            <section className="w-full flex items-center py-2 pb-6">
                <PageTitleBackButton content={trans('Create Hangout')}/>
            </section>
            <section className="w-full flex flex-wrap content-start bg-white p-6">
                <Image src={SectionImage} alt={"create-image"}/>
            </section>
            <section className="w-full flex flex-wrap content-end bg-white px-6">
                <div className='w-full flex flex-wrap '>
                    <InputLabel placeholder={trans("Going to Oman")} label={trans("Hangout Title")}/>
                </div>
            </section>
            <section className="w-full flex flex-wrap content-end bg-white p-6">
                <h4 className="w-full flex font-bold">{trans("Hangout Duration")}</h4>
                <div className='w-full flex flex-wrap items-center justify-between mt-3'>
                    {
                        Array.from({length: 3}).map((_, index) => (
                            <div key={index} className="flex items-center px-3 border border-gray-200 rounded-2xl">
                                <input id={`bordered-radio-${index + 1}`} type="radio" value="" name="bordered-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor={`bordered-radio-${index + 1}`}
                                       className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {index + 1} {trans("Hours")}
                                </label>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex flex-wrap mt-10 ">
                    <button
                        disabled={true}
                        className="w-full disabled:bg-opacity-35 flex flex-wrap rounded-2xl p-3 items-center justify-center bg-sky-400 text-white">
                        {trans("Create")}
                    </button>
                </div>
            </section>
        </section>
    );
}

export default Page;