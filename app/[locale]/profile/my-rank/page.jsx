import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Image from "next/image";
import FriendIcon from "@/public/icons/friends-icon.svg";
import YoutubeIcon from "@/public/icons/youtube-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import TelegramIcon from "@/public/icons/telgram-chanel-icon.svg";
import {useTranslations} from "next-intl";
function Page() {

    const trans = useTranslations("translate")

    return (
        <section
            className="w-full bg-gradient-to-b from-gray-50 to-white page-up-animation  min-h-svh  bg-white p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex truncate items-center justify-center font-medium ">
                 <div className='w-full truncate'>
                     {trans("Ranking system")}
                 </div>
                </div>
                <div className="w-1/4"></div>
            </div>

            <div className="w-full flex flex-wrap px-4">
                <h4 className="w-full flex items-center text-lg font-bold text-gray-700">
                    {trans("Tasks")}
                </h4>
                <p className="w-full truncate text-sm text-gray-400 pt-1">
                    {trans("You can earn points by doing tasks")}
                </p>
            </div>

            <section className="w-full flex space-y-3 flex-wrap mt-5 p-2">
                <article className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow-sm ">
                    <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                        <figure className="w-10/12 gap-2 flex">
                            <Image src={FriendIcon} alt={'FriendIcon'} width={24} height={24}/>
                            <figcaption className='w-1/2 grow flex flex-wrap'>
                                <h5 className="text-[12px] truncate w-full">{trans("Invite Your Friends")}</h5>
                                <h6 className="text-[10px] truncate text-gray-500">0 {trans("friend invited")}</h6>
                            </figcaption>
                        </figure>
                        <div className="w-2/12 text-[12px] text-sky-500 font-bold">
                            +2 {trans("Point")}
                        </div>
                    </div>
                </article>
                <article className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow-sm ">
                    <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                        <figure className="w-10/12 gap-2 flex">
                            <Image src={YoutubeIcon} alt={'YoutubeIcon'} width={24} height={24}/>
                            <figcaption className='w-1/2 grow flex items-center flex-wrap'>
                                <h5 className="text-[12px] truncate w-full">{trans("Join Youtube Channel")}</h5>
                            </figcaption>
                        </figure>
                        <div className="w-2/12 text-[12px] text-sky-500 font-bold">
                            +2 {trans("Point")}
                        </div>
                    </div>
                </article>
                <article className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow-sm ">
                    <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                        <figure className="w-10/12 gap-2 flex">
                            <Image src={InstagramIcon} alt={'InstagramIcon'} width={24} height={24}/>
                            <figcaption className='w-1/2 grow flex items-center flex-wrap'>
                                <h5 className="text-[12px] w-full truncate">{trans("Follow Instagram")}</h5>
                            </figcaption>
                        </figure>
                        <div className="w-2/12 text-[12px] text-sky-500 font-bold">
                            +2 {trans("Point")}
                        </div>
                    </div>
                </article>
                <article className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow-sm ">
                    <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                        <figure className="w-10/12 gap-2 flex">
                            <Image src={TelegramIcon} alt={'TelegramIcon'} width={24} height={24}/>
                            <figcaption className='w-1/2 grow flex items-center flex-wrap'>
                                <h5 className="text-[12px] w-full">{trans("Join Telegram Channel")}</h5>
                            </figcaption>
                        </figure>
                        <div className="w-2/12 text-[12px] text-sky-500 font-bold">
                            +2 {trans("Point")}
                        </div>
                    </div>
                </article>
            </section>

            <div className="w-full flex flex-wrap px-4 mt-10">
                <h4 className="w-full flex items-center truncate font-bold text-gray-700">
                    {trans("Ranking system guide")}
                </h4>
                <p className="w-full text-[10px] truncate text-gray-400 pt-1">
                    {trans("You can learn about ranking system and it’s Rewards")}
                </p>
                <div className="w-full flex flex-wrap p-2  overflow-x-auto ">
                    {
                        Array.from({length : 20}).map((item, i) => (
                            <div key={i} className="w-full flex">
                                <div className="min-w-20 border p-2"></div>
                                <div className="min-w-32 border p-2"></div>
                                <div className="min-w-20 border p-2"></div>
                                <div className="min-w-28 border p-2"></div>
                                <div className="min-w-32 border p-2"></div>
                                <div className="min-w-32 border p-2"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Page;