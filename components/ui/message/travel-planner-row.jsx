import React from 'react';
import Image from "next/image";
import TravelPlannerIcon from "@/public/icons/travel-planer-icon.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";

function TravelPlannerRow({trans}) {
    return (
        <>
            <div className="w-11/12 overflow-hidden">
                <div className='flex w-full items-center gap-2'>
                    <figure
                        className='flex w-2/12 rounded-full bg-gray-100 h-[50px] items-center justify-center'>
                        <Image src={TravelPlannerIcon} alt={"request-user-icon"} width={20} height={20}/>
                    </figure>
                    <div className={"w-10/12 flex flex-wrap"}>
                        <div className="w-full  font-bold">
                            {trans("Travel Planner")}
                        </div>
                        <div className="w-full text-gray-500   text-sm">
                            {trans('Get helped by Ai')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/12 flex items-center justify-end">
                <button className="p-2 rounded-lg hover:bg-gray-50 duration-100">
                    <Image src={ArrowLeftIcon} alt={"arrow-left-icon"} className="rotate-180" width={14}
                           height={14}/>
                </button>
            </div>
        </>
    );
}

export default TravelPlannerRow;