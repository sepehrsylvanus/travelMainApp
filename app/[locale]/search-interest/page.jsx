"use client"
import React, {useState} from 'react';
import TabsCloseButtons from "@/components/ui/search-interest/tabs-close-buttons";
import Image from "next/image";
import {interestsStaticData} from "@/utils/mock/mock-data";
import InputLabel from "@/components/ui/inputs/input-label";


function Page() {
    const [state, setState] = useState("interest") //countries
    return (
        <section className="w-full page-up-animation pt-3 flex flex-wrap">
            <TabsCloseButtons setState={setState} state={state}/>
            <div className='w-full flex flex-wrap bg-white mt-5 p-2'>
                <div className='w-full flex flex-wrap px-3'>
                    <InputLabel placeholder={'Example: Going to Oman'}/>
                </div>
                <section
                    className="w-full flex flex-wrap space-y-3 py-3 mt-5 bg-white content-start justify-center h-auto">

                    {state === "interest" && <InterestSection/>}
                    {state === "countries" && <CountriesSection/>}

                </section>
            </div>
        </section>
    );
}

export default Page;


const InterestSection = () => {
    return (
        interestsStaticData?.map((item, index) => (
            <figure key={index} className="flex h-[64px] page-up-animation w-[327px] rounded-lg relative">
                <Image src={item?.media} alt={"images"} width={327} height={64.57}/>
                <figcaption
                    className="absolute top-1/2  font-bold text-white left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {item?.title}
                </figcaption>
            </figure>
        ))
    )
}
const CountriesSection = () => {
    return (
        interestsStaticData.slice(0 , 4)?.map((item, index) => (
            <figure key={index} className="flex h-[64px] page-up-animation w-[327px] rounded-lg relative">
                <Image src={item?.media} alt={"images"} width={327} height={64.57}/>
                <figcaption
                    className="absolute top-1/2  font-bold text-white left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {item?.title}
                </figcaption>
            </figure>
        ))
    )
}