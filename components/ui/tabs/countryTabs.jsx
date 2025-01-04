"use client"
import React, {useEffect, useState} from 'react';
import CountryHomeTab from "@/components/ui/tabs/country-home-tab";
import CountryTravelersTab from "@/components/ui/tabs/country-travelers-tab";
import CountryEventsTab from "@/components/ui/tabs/country-events-tab";
import CountryTravelGuideTab from "@/components/ui/tabs/country-travel-guide-tab";
import {useParams} from "next/navigation";

function CountryTabs({trans}) {
    const {locale} = useParams()
    const [tabStatus, setTabStatus] = useState("home")
    const {slug} = useParams()
    useEffect(() => {
        setTabStatus(slug ?? "home")
    }, [slug]);
    return (
        <>
            <div className="w-full flex flex-wrap  items-center p-3 px-6 cursor-pointer">
                <ul className="w-full flex  items-center justify-between  flex-wrap">
                    <li onClick={() => setTabStatus("home")} className={`duration-100 text-[12px] ${tabStatus  === 'home' ? "text-blue-400" : 'text-gray-500 '} `}>{trans("Home")}</li>
                    <li onClick={() => setTabStatus("travelers")} className={`duration-100 text-[12px] ${tabStatus  === 'travelers' ? "text-blue-400" : 'text-gray-500 '} `}>{trans("Travelers")}</li>
                    <li onClick={() => setTabStatus("events")} className={`duration-100 text-[12px] ${tabStatus  === 'events' ? "text-blue-400" : 'text-gray-500 '} `}>{trans("Events")}</li>
                    <li onClick={() => setTabStatus("travel-guide")} className={`duration-100 text-[12px] ${tabStatus  === 'travel-guide' ? "text-blue-400" : 'text-gray-500 '} `}>{trans("Travel Guide")}</li>
                </ul>
            </div>

            {tabStatus === "home" && <CountryHomeTab locale={locale} trans={trans}/>}
            {tabStatus === "travelers" && <CountryTravelersTab trans={trans}/>}
            {tabStatus === "events" && <CountryEventsTab trans={trans}/>}
            {tabStatus === "travel-guide" && <CountryTravelGuideTab trans={trans}/>}

        </>

    );
}

export default CountryTabs;
