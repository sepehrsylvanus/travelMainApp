"use client"
import React from "react";
import Image from "next/image";


import ImageInput from "@/public/images/add-image.svg"
import DatePickerComponent from "@/components/ui/date-picker/date-picker-component";
import InputLabel from "@/components/ui/inputs/input-label";
import IconPlus from "@/public/icons/close-icon.svg"
import {useTranslations} from "next-intl";
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";


export default function Page() {
    const trans = useTranslations('translate');
    return (
        <section className="w-full page-up-animation flex pb-16 flex-wrap">
            <div className="w-full bg-gray-50 flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex px-4 items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg">
                    {trans("Tips and Advice")}
                </div>
                <div className="w-1/4"></div>
            </div>

            <div className="w-full px-6 py-5 flex flex-wrap items-center justify-between  ">
                <span className="font-bold">
                    Add Interest Or Country
                </span>
                <span className="text-xl text-custom-purple-3">
                    +
                </span>
            </div>

            <div className={"flex w-full px-6 items-center justify-between"}>
                <div className='w-full flex flex-wrap capitalize'>
                    <InputLabel placeholder={trans("Example: Going to Oman")} label={trans("title")}/>
                </div>
            </div>
            <div className={"flex w-full px-6 py-5 items-center justify-between"}>
                <div className='w-full flex flex-wrap capitalize'>
                    <div className="w-full font-bold">
                        {trans("Description")}
                    </div>
                    <textarea placeholder={trans("Description")}
                              className="rounded-2xl text-sm  p-3 mt-2 border border-gray-200 w-full" rows={6}/>
                </div>
            </div>

            <div className={"flex w-full px-6 py-5 items-center justify-between"}>
                <div className='w-full flex flex-wrap capitalize'>
                    <div className="w-full font-bold">
                        {trans("Add Image")}
                    </div>
                    <div className="w-full flex flex-wrap items-center mt-2 justify-center">
                        <label htmlFor="dropzone-file" className='cursor-pointer'>
                            <Image width={327} height={211.4} src={ImageInput} alt={""}/>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full px-6  flex flex-wrap my-3 ">
                <button
                    className="w-full flex flex-wrap rounded-2xl p-3 items-center justify-center bg-sky-400 text-white">
                    {trans("Post")}
                </button>
            </div>
        </section>
    );
}

