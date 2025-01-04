import React from 'react';
import AccordionCountryEvent from "@/components/ui/accordions/accordion-country-event";

function CountryTravelGuideTab({trans}) {

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

            <div className="w-full flex flex-wrap ">
                <h3 className="w-full text-lg font-medium  flex flex-wrap py-3">{trans("Tour Leader")}</h3>
                <AccordionCountryEvent/>
            </div>

        </section>
    );
}

export default CountryTravelGuideTab;