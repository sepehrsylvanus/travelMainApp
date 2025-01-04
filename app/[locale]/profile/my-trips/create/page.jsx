import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import PassportImage from "@/public/images/passport.png"
import Image from "next/image";
import DatePickerComponent from "@/components/ui/date-picker/date-picker-component";
import {useTranslations} from "next-intl";
function Page() {
    const trans = useTranslations("translate")
    return (
        <section className="w-full page-up-animation  min-h-svh  bg-white p-4 content-start flex flex-wrap">
            <div className="w-full flex py-3 flex-wrap items-center justify-between ">
                <div className="w-1/4 flex  items-start justify-start">
                    <CloseButtonComponent/>
                </div>
                <div className="w-2/4 flex items-center justify-center font-medium text-lg"></div>
                <div className="w-1/4"></div>
            </div>

            <figure className="w-full flex flex-wrap py-5 items-center justify-center">
                <Image src={PassportImage} alt={"PassportImage"} width={195} height={125}/>
            </figure>

            <div className='w-full flex flex-wrap my-4 space-y-1'>
                <div className="w-full font-bold capitalize">
                    {trans("Save a Trip")}
                </div>
                <div className="w-full  text-sm text-gray-400">
                    {trans("Saving Trips helps us match you to travelers going on the same date")}
                </div>
            </div>

            <div className='w-full flex flex-wrap my-4 space-y-2'>
                <div className="w-full font-bold capitalize">{trans("Enter the location")}</div>
                <div className="w-full flex flex-wrap content-start justify-center">
                    <select
                        className="bg-white border border-gray-100 text-sm  focus:outline-0 w-full px-2 py-4 focus:border-none focus:ring-1 rounded-xl">
                        <option selected>{trans("Choose a country")}</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                </div>
            </div>


            <div className='w-full flex flex-wrap my-4 space-y-2'>
                <div className="w-full font-bold capitalize">{trans("Select Dates")}</div>
                <div className="w-full flex flex-wrap ">
                    <div className="w-1/2 rounded-lg">
                        <div className="w-full p-2">
                            <div className='w-full h-full py-4 px-3 bg-white border rounded-2xl '>
                                <DatePickerComponent label={trans("Arriving")}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 rounded-lg">
                        <div className="w-full p-2">
                            <div className='w-full h-full py-4 px-3 bg-white border rounded-2xl '>
                                <DatePickerComponent label={trans("Departing")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-wrap py-5">
                <button className="w-full p-3 bg-sky-500 rounded-xl text-white font-bold">
                    {trans("Save the Trip")}
                </button>
            </div>

        </section>
    );
}

export default Page;