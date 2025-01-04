import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Image from "next/image";
import ConcertImage from "@/public/images/concert-image.svg"
import CalenderIcon from "@/public/icons/calender-icon.svg"
import PersonIcon from "@/public/icons/person-icon.svg"
import {useTranslations} from "next-intl";
function Page() {
    const trans = useTranslations("translate")
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white page-up-animation  min-h-svh  bg-white p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg">
                    <div className="w-full truncate text-base">
                        {trans("My Travel Plans")}
                    </div>
                </div>
                <div className="w-1/4"></div>
            </div>
            <section className="w-full flex space-y-3 flex-wrap mt-5 p-3">
                {
                    Array.from({ length: 10 }).map((item, i) => (
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
                                    <figcaption className="font-medium  text-gray-400 text-[10px]">
                                        <div className="w-full truncate">
                                            15 {trans("Follower Joined")}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    ))
                }
            </section>
            <div className="w-full flex items-center justify-center py-3 text-gray-300 font-medium text-[12px]">
                {trans("Swipe right to delete")}
            </div>
        </section>
    );
}

export default Page;