import Image from "next/image";
import React from "react";
import {interestsStaticData} from "@/utils/mock/mock-data";
import PageTitleBackButton from "@/components/ui/page-title-back-button/page-title-back-button";
import InputLabel from "@/components/ui/inputs/input-label";

function Page() {

    return (
        <section className="w-full bg-white page-up-animation min-h-svh p-3 flex content-start flex-wrap">
            <PageTitleBackButton content={"Countries"}/>
            <div className='w-full flex flex-wrap px-3'>
                <InputLabel placeholder={'Example: Going to Oman'}/>
            </div>
            <div className='w-full flex flex-wrap content-start justify-center space-y-3 mt-4'>
                {interestsStaticData.slice(0, 4)?.map((item, index) => (
                    <figure key={index} className="flex h-[64px] page-up-animation w-[327px] rounded-lg relative">
                        <Image src={item?.media} alt={"images"} width={327} height={64.57}/>
                        <figcaption
                            className="absolute top-1/2  font-bold text-white left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {item?.title}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default Page;