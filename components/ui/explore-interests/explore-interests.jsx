import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imagePostItem from "@/public/images/Rectangle 44.svg";

const interests = [
    { name: "Nature", image: imagePostItem },
    { name: "Technology", image: imagePostItem },
    { name: "Art", image: imagePostItem },
    { name: "Science", image: imagePostItem },
];

function ExploreInterests({ trans, locale }) {
    return (
        <section className="w-full my-5 bg-main-background-lite flex flex-wrap">
            <div className="w-full flex flex-wrap font-medium items-center justify-between ps-6 p-2">
                <strong>{trans("Explore Interests")}</strong>
                <Link scroll={false} className="text-blue-500 text-sm" href={`/${locale}/explore-interests`}>
                    {trans("more")}
                </Link>
            </div>
            <section className="w-full ps-6 gap-3 overflow-x-auto flex items-start justify-normal flex-nowrap">
                {interests.map((interest, index) => (
                    <figure
                        key={index}
                        className="min-w-[135px] flex-grow flex items-center justify-center h-[87px] rounded-xl relative">
                        <Image
                            src={interest.image}
                            alt={interest.name}
                            className="filter saturate-50"
                            width={135}
                            height={87}
                        />
                        <figcaption className="absolute text-[10px] text-white top-1/2 -translate-y-1/2">
                            {interest.name}
                        </figcaption>
                    </figure>
                ))}
            </section>
        </section>
    );
}

export default ExploreInterests;
