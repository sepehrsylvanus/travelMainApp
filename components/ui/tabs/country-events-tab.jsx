import React from 'react';
import Image from "next/image";
import AccordionCountryEvent from "@/components/ui/accordions/accordion-country-event";
function CountryEventsTab({trans}) {

    const cityStatic = [
        {
            id : 1 ,
            title : 'Berat',
            media : '/images/top-city.svg'
        },
        {
            id : 2 ,
            title : 'Tirana',
            media : '/images/top-city.svg'
        },
        {
            id : 3 ,
            title : 'Vlore',
            media : '/images/top-city.svg'
        },
        {
            id : 4 ,
            title : 'Tirana',
            media : '/images/top-city.svg'
        },
        {
            id : 5 ,
            title : 'Vlore',
            media : '/images/top-city.svg'
        },
    ]

    return (
        <section className='w-full page-up-animation px-6 flex flex-wrap '>
            <div className="w-full flex flex-wrap">
                <h3 className="w-full text-lg font-medium  flex flex-wrap py-3">{trans("Top Cities")}</h3>
                <div className="w-full flex flex-wrap items-center  justify-between">
                    {
                        cityStatic?.map((item, index) => (
                            <figure key={index} className="w-[50px] h-[65px] flex flex-wrap">
                                <Image src={item?.media} alt={'top-city'} width={50} height={50}
                                       className="rounded-full"/>
                                <figcaption
                                    className='w-full flex items-center justify-center text-gray-500 p-0 text-[10px] '>
                                    {item?.title}
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-wrap ">
                <h3 className="w-full text-lg font-medium  flex flex-wrap py-3">{trans("Upcoming events")}</h3>
                <AccordionCountryEvent/>
            </div>

        </section>
    );
}

export default CountryEventsTab;
