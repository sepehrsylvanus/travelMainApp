import React from 'react';
import NavigationTop from "@/components/ui/navigation/navigation-top";
import SearchBox from "@/components/ui/search-box/search-box";
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import ItalyFlag from "@/public/flag/italy-flag-icon.svg";
import ArrowRightIcon from "@/public/icons/arrow-right-icon.svg";
import Link from "next/link";
import {useTranslations} from "next-intl";
import FilterIcon from "@/public/icons/filter-icon.svg"
function Page({params}) {
    const trans = useTranslations("translate")
    return (
        <section className="w-full flex flex-wrap pb-24 content-start">
            <NavigationTop locale={params.locale} content={trans("Nearby People")} />
            <SearchBox trans={trans} />
            <section className="w-full flex flex-wrap  content-start bg-white px-6">
                <h4 className="w-full flex flex-wrap pt-4 font-bold">{trans("Hangouts")}</h4>
                <section className="w-full flex flex-wrap items-center justify-center">
                    <div
                        className="w-[327px] bg-main-background-white h-[108px] flex items-center justify-center p-2 rounded-xl my-5">
                        <div className="w-1/2 flex flex-wrap p-2">
                            <h4 className="font-bold capitalize">{trans('Nothing is here')}</h4>
                            <span className="text-gray-400 truncate text-[12px] pt-1">{trans("Your Plans appear here")}</span>
                        </div>
                        <div className="w-1/2 flex items-center justify-end p-2">
                            <Link
                                scroll={false}
                                href={`/${params.locale}/nearby-people/create`} passHref prefetch
                                className="text-blue-400 border items-center justify-center flex font-bold w-[88px] h-[48px] rounded-2xl border-blue-400">
                                {trans('Create')}
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-full flex flex-wrap bg-white p-2 px-6">
                <div className="w-full flex flex-wrap items-center justify-between">
                    <h4 className="flex flex-wrap  font-bold">{trans('Nearby Travelers')}</h4>
                    <button>
                        <Image src={FilterIcon} alt={""} height={16} width={16}/>
                    </button>
                </div>
                <div className="w-full flex flex-wrap space-y-2 ">
                {
                        Array.from({length: 10}).map((_, index) => (
                            <div key={index} className='w-full flex flex-wrap py-2 items-center justify-between'>
                                <Link scroll={false} href={`/${params.locale}/friend-profile`} passHref prefetch className="w-auto gap-2 flex">
                                    <div className="w-auto h-auto relative">
                                        <Image src={PersonImage} alt={''} width={36} height={36}/>
                                        <Image src={ItalyFlag} alt={"ItalyFlag"} height={9} width={9}
                                               className="absolute w-[9px] h-[9px] bg-white border border-white rounded-full bottom-0 right-0"/>
                                    </div>
                                    <figcaption className='w-1/2 flex flex-wrap'>
                                        <h5 className="text-sm">Mehdi</h5>
                                        <h6 className="text-[10px] text-gray-500">Italy</h6>
                                    </figcaption>
                                </Link>
                                <div className="w-auto text-gray-500 font-light text-[10px]">
                                    <button className='w-auto p-3 rounded hover:bg-gray-50 duration-100'>
                                        <Image src={ArrowRightIcon} alt={"arrow-right"} width={5.37} height={10.84}/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    );
}

export default Page;