import React from 'react';
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import CommentIcon from "@/public/icons/comment-icon.svg";
import HeartIcon from "@/public/icons/heart-icon.svg";

function CommentCard({trans}) {
    return (
        <article className="w-full flex content-start flex-wrap pb-5 border-b">
            <div className='w-full flex flex-wrap p-2 items-center justify-between'>
                <figure className="w-auto gap-2 flex">
                    <Image src={PersonImage} alt={''} width={36} height={36}/>
                    <figcaption className='w-1/2 flex flex-wrap'>
                        <h5 className="text-sm">Mehdi</h5>
                        <h6 className="text-[10px] text-gray-500">Italy</h6>
                    </figcaption>
                </figure>
                <div className="w-auto text-gray-500 font-light text-[10px]">
                    20 {trans("hours ago")}
                </div>
            </div>
            <h3 className="w-full flex flex-wrap p-2 font-bold">
                Lorem ipsum
            </h3>
            <p className="w-full flex flex-wrap p-2 font-medium text-gray-500 text-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut feugiat arcu. Donec eu purus nulla.
                Aliquam ac ipsum sodales, semper diam a, euismod tortor. Proi
            </p>
            <div className="w-full flex flex-wrap  gap-2 items-center justify-end px-2">
                <div className={"flex flex-wrap items-center gap-1"}>
                    <Image src={CommentIcon} alt={'comment-icon'} width={22} height={22}/>
                    34
                </div>
                <div className={"flex flex-wrap items-center gap-1"}>
                    <Image src={HeartIcon} alt={'comment-icon'} width={22} height={22}/>
                    1
                </div>
            </div>
        </article>
    );
}

export default CommentCard;