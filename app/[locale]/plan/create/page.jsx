"use client"
import TitleCloseButtonComponent from "@/components/ui/plans/create/title-close-component";
import React from "react";
import Image from "next/image";


import ImageInput from "@/public/images/add-image.svg"
import DatePickerComponent from "@/components/ui/date-picker/date-picker-component";
import InputLabel from "@/components/ui/inputs/input-label";
import IconPlus from "@/public/icons/close-icon.svg"
import {useTranslations} from "next-intl";


export default function Page() {
    const trans = useTranslations('translate');
    return (
        <section className="w-full page-up-animation flex pb-16 flex-wrap">
            <TitleCloseButtonComponent trans={trans} />
            <section className="w-full flex flex-wrap bg-gray-50">

                <div className="flex items-center p-3  my-4 justify-center w-full">
                    <label htmlFor="dropzone-file" className='cursor-pointer'>
                        <Image width={327} height={211.4} src={ImageInput} alt={""}/>
                        <input id="dropzone-file" type="file" className="hidden"/>
                    </label>
                </div>

                <div className="w-full flex flex-wrap p-3">
                    <div className="w-1/2 p-2  rounded-lg">
                        <div className='w-full h-full py-4 px-3 bg-white border rounded-lg '>
                            <DatePickerComponent label={trans("Arriving")}/>
                        </div>
                    </div>
                    <div className="w-1/2 p-2  rounded-lg">
                        <div className='w-full h-full py-4 px-3 bg-white border rounded-2xl '>
                            <DatePickerComponent label={trans("Departing")}/>
                        </div>
                    </div>
                </div>


                <div className='w-full flex flex-wrap my-4 px-5 p-2'>
                    <div className='w-full flex flex-wrap '>
                        <InputLabel placeholder={trans("Example: Going to Oman")} label={trans("Plan Name")}/>
                    </div>
                    <div className='w-full flex flex-wrap '>
                        <InputLabel placeholder={trans("Going to Oman")} label={trans("About Trip")}/>
                    </div>
                </div>


                <div className='w-full flex flex-wrap  px-5 p-2'>
                    <div className='w-full mb-3 flex flex-wrap'>
                        <div className="w-2/3 flex items-center  gap-2">
                            <h4 className='flex text-lg font-bold'>{trans("Destinations")}</h4>
                            <span className="text-gray-400 text-[10px]">10 {trans("max")}</span>
                        </div>
                        <div className='w-1/3 flex items-center justify-end'>
                            <button className="rounded-lg bg-white flex items-center justify-center">
                                <Image src={IconPlus} className="rotate-45" alt={""}/>
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex mb-3 flex-wrap'>
                        <div className="w-2/3 flex items-center gap-2">
                            <h4 className='flex text-lg font-bold'>{trans("Trip Interests")}</h4>
                            <span className="text-gray-400 text-[10px]">5 {trans("max")}</span>
                        </div>
                        <div className='w-1/3 flex items-center justify-end'>
                            <button className="rounded-lg bg-white flex items-center justify-center">
                                <Image src={IconPlus} className="rotate-45" alt={""}/>
                            </button>
                        </div>
                    </div>


                    <div className='w-full flex mb-3 flex-wrap'>
                        <div className="w-2/3 flex flex-wrap content-center ">
                            <h4 className='flex w-full text-lg font-bold'>{trans("Private Plan")}</h4>
                            <span className="text-gray-400 w-full flex text-[10px]">{trans('Manually Approve Participations')}</span>
                        </div>
                        <div className='w-1/3 flex items-center justify-end'>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-700"></div>
                            </label>
                        </div>
                    </div>


                    <div className="w-full flex flex-wrap my-3 ">
                        <button className="w-full flex flex-wrap rounded-2xl p-3 items-center justify-center bg-sky-400 text-white">
                            {trans("Post")}
                        </button>
                    </div>
                </div>


            </section>


        </section>
    );
}

