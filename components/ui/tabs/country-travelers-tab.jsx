import React from 'react';
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import ItalyFlag from "@/public/flag/italy-flag-icon.svg";
import ArrowRightIcon from "@/public/icons/arrow-right-icon.svg";

function CountryTravelersTab({trans}) {
    return (
        <section className='w-full page-up-animation flex flex-wrap '>
            <h3 className="w-full text-xl font-medium ps-6 flex flex-wrap py-3">{trans("Travelers")} in Albania</h3>
            <div className="w-full flex flex-wrap space-y-2 ">
                {
                    Array.from({length : 4}).map((_ , index)=> (
                        <div key={index} className='w-full flex flex-wrap p-2 ps-6 items-center justify-between'>
                            <figure className="w-auto gap-2 flex">
                                <div className="w-auto h-auto relative">
                                    <Image src={PersonImage} alt={''} width={36} height={36}/>
                                    <Image src={ItalyFlag} alt={"ItalyFlag"} height={9} width={9}
                                           className="absolute w-[9px] h-[9px] bg-white border border-white rounded-full bottom-0 right-0"/>
                                </div>
                                <figcaption className='w-1/2 flex flex-wrap'>
                                    <h5 className="text-sm">Mehdi</h5>
                                    <h6 className="text-[10px] text-gray-500">Italy</h6>
                                </figcaption>
                            </figure>
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
    );
}

export default CountryTravelersTab;
