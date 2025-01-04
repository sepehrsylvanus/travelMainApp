import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Image from "next/image";
import SearchTripImage from "@/public/images/search-trip.svg"
import React from "react";
import DatePickerComponent from "@/components/ui/date-picker/date-picker-component";
import Link from "next/link";

function Page() {

    return (
        <section className="w-full bg-white page-up-animation min-h-svh p-3 flex content-between flex-wrap">
            <div className='w-full flex items-center py-2 '>
                <CloseButtonComponent/>
            </div>
            <figure className='w-full flex my-5 items-center justify-center  p-2'>
                <Image src={SearchTripImage} width={167} height={127} alt={"search-trip"}/>
            </figure>

            <div className="w-full flex flex-wrap">

                <div className='w-full flex flex-wrap my-4 space-y-2'>
                    <div className="w-full font-bold capitalize">Your Destination</div>
                    <div className="w-full flex flex-wrap content-start justify-center">
                        <select
                            className="bg-white border border-gray-100 text-sm  focus:outline-0 w-full px-2 py-4 focus:border-none focus:ring-1 rounded-xl">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className='w-full flex flex-wrap my-4 space-y-2'>
                <div className="w-full font-bold capitalize">Select Dates</div>
                <div className="w-full flex flex-wrap ">
                    <div className="w-1/2 rounded-lg">
                        <div className="w-full p-2">
                            <div className='w-full h-full py-4 px-3 bg-white border rounded-2xl '>
                                <DatePickerComponent label={"Arriving"}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 rounded-lg">
                        <div className="w-full p-2">
                            <div className='w-full h-full py-4 px-3 bg-white border rounded-2xl '>
                                <DatePickerComponent label={"Departing"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-wrap py-5">
                <Link passHref href={"/app/%5Blocale%5D/search-trip/results"} prefetch={true} className="w-full p-3 bg-sky-500 flex items-center justify-center rounded-xl text-white font-bold">
                    Search
                </Link>
            </div>


        </section>
    );
}

export default Page;