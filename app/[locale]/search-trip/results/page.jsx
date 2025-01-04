import Image from "next/image";
import React from "react";
import BackHistoryButton from "@/components/ui/buttons/back-history-button";
import PersonImage from "@/public/images/person-icon.svg";
import ItalyFlag from "@/public/flag/italy-flag-icon.svg";
import ConcertImage from "@/public/images/concert-image.svg";
import CalenderIcon from "@/public/icons/calender-icon.svg";
import PersonIcon from "@/public/icons/person-icon.svg";

function Page() {

    return (
        <section className="w-full bg-white page-up-animation min-h-svh p-3 flex content-start flex-wrap">
            <div className="w-full flex flex-wrap  items-center justify-between">

                <div className="w-1/4 flex items-center justify-center">
                    <BackHistoryButton/>
                </div>
                <div className="w-2/4 flex flex-wrap justify-center content-center text-lg">
                    <div className="w-full flex items-center justify-center">
                        Istanbul
                    </div>
                    <span className="text-gray-400 text-[12px]">
                       Sep 17 - Sep 28
                    </span>
                </div>
                <div className="w-1/4"></div>
            </div>

            <div className='w-full flex gap-2 overflow-x-auto my-5'>
                {
                    Array?.from({length: 10}).map((item, i) => (
                        <div key={i} className="min-w-max h-auto relative">
                            <Image draggable={false} src={PersonImage} alt={''} width={50} height={50}/>
                            <Image draggable={false} src={ItalyFlag} alt={"ItalyFlag"} height={14} width={14}
                                   className="absolute bg-white border border-white rounded-full bottom-0 right-0"/>
                        </div>
                    ))
                }
            </div>

            <section className="w-full flex space-y-3 flex-wrap mt-5 ">
                {
                    Array.from({length: 2}).map((item, i) => (
                        <article key={i} className="w-full bg-white flex flex-wrap rounded-xl shadow-md ">
                            <figure className="w-2/6 ">
                                <Image src={ConcertImage} alt={"concertImage"} className="rounded-xl" width={100}
                                       height={100}/>
                            </figure>
                            <div className="w-4/6 flex flex-wrap content-between justify-start py-2 ps-2 ">
                                <h4 className="w-full flex-wrap font-bold">
                                    Istanbul - Tatlis Concert
                                </h4>
                                <figure className="w-full flex gap-1 items-center">
                                    <Image src={CalenderIcon} alt={"CalenderIcon"} height={18} width={18}/>
                                    <figcaption className="font-medium text-gray-400 text-[10px]">
                                        Sep 17 - Sep 28
                                    </figcaption>
                                </figure>
                                <figure className="w-full flex gap-1 items-center">
                                    <Image src={PersonIcon} alt={"PersonIcon"} height={18} width={18}/>
                                    <figcaption className="font-medium text-gray-400 text-[10px]">
                                        15 Follower Joined
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    ))
                }
            </section>


        </section>
    );
}

export default Page;