"use client"
import React, {useState} from 'react';
import Step1Image from "@/public/intro/intro-1.svg"
import Step2Image from "@/public/intro/intro-2.svg"
import Step3Image from "@/public/intro/intro-3.svg"
import Step4Image from "@/public/intro/intro-4.svg"
import ChevronIcon from "@/public/icons/chevron-right.svg"
import Image from "next/image";
import {useRouter} from "next/navigation";

function Page() {
    const [step, setStep] = useState(1)
    return (
        <>
            {
                step === 1 && <Step1 setStep={setStep}/>
            }
            {
                step === 2 && <Step2 setStep={setStep}/>
            }
            {
                step === 3 && <Step3 setStep={setStep}/>
            }
            {
                step === 4 && <Step4 setStep={setStep}/>
            }
        </>
    );
}

export default Page;


const Step1 = ({setStep}) => {
    return (
        <div className='w-full h-svh bg-white content-between p-4 justify-center flex flex-wrap'>
            <div className='w-full flex p-2 items-center justify-end'>
                <button className="text-lg font-medium active:scale-95 duration-100">
                    Skip
                </button>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center">
                <Image src={Step1Image} loading={"eager"} alt={"Step1Image"} height={77} width={290}/>
            </div>

            <div className='w-[290px] flex items-center justify-center flex-wrap'>
                <h3 className="text-[26px] w-full text-center font-bold">
                    Welcome to Travel Bff
                </h3>
                <p className="text-sm px-1 w-full text-gray-600 mt-6">
                    Are you ready to explore the world? 🌍✨ Our app is your passport to unforgettable journeys
                </p>
            </div>

            <div className='w-full flex p-2 items-center justify-end'>
                <button onClick={() => setStep(2)}
                        className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100">
                    <Image src={ChevronIcon} loading={"eager"} alt={""}/>
                </button>
            </div>
        </div>
    )
}
const Step2 = ({setStep}) => {
    return (
        <div className='w-full h-svh bg-white content-between p-4 justify-center flex flex-wrap'>
            <div className='w-full flex p-2 items-center justify-end'>
                <button className="text-lg font-medium active:scale-95 duration-100">
                    Skip
                </button>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center">
                <Image src={Step2Image} loading={"eager"} alt={"Step1Image"} height={77} width={290}/>
            </div>

            <div className='w-[290px] flex items-center justify-center flex-wrap'>
                <h3 className="text-[26px] w-full text-center font-bold">
                    Welcome to Travel Bff
                </h3>
                <p className="text-sm px-1 w-full text-gray-600 mt-6">
                    Are you ready to explore the world? 🌍✨ Our app is your passport to unforgettable journeys
                </p>
            </div>

            <div className='w-full flex p-2 items-center justify-end'>
                <button onClick={() => setStep(3)}
                        className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100">
                    <Image src={ChevronIcon} loading={"eager"} alt={""}/>
                </button>
            </div>
        </div>
    )
}
const Step3 = ({setStep}) => {
    return (
        <div className='w-full h-svh bg-white content-between p-4 justify-center flex flex-wrap'>
            <div className='w-full flex p-2 items-center justify-end'>
                <button className="text-lg font-medium active:scale-95 duration-100">
                    Skip
                </button>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center">
                <Image src={Step3Image} loading={"eager"} alt={"Step1Image"} height={77} width={290}/>
            </div>

            <div className='w-[290px] flex items-center justify-center flex-wrap'>
                <h3 className="text-[26px] w-full text-center font-bold">
                    Welcome to Travel Bff
                </h3>
                <p className="text-sm px-1 w-full text-gray-600 mt-6">
                    Are you ready to explore the world? 🌍✨ Our app is your passport to unforgettable journeys
                </p>
            </div>

            <div className='w-full flex p-2 items-center justify-end'>
                <button onClick={() => setStep(4)}
                        className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100">
                    <Image src={ChevronIcon} alt={""}/>
                </button>
            </div>
        </div>
    )
}
const Step4 = () => {
    const router = useRouter()
    return (
        <div className='w-full h-svh bg-white content-between p-4 justify-center flex flex-wrap'>
            <div className='w-full flex p-2 items-center justify-end'>
                <button className="text-lg font-medium active:scale-95 duration-100">
                    Skip
                </button>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center">
                <Image src={Step4Image} loading={"eager"} alt={"Step1Image"} height={77} width={290}/>
            </div>

            <div className='w-[290px] flex items-center justify-center flex-wrap'>
                <h3 className="text-[26px] w-full text-center font-bold">
                    Welcome to Travel Bff
                </h3>
                <p className="text-sm px-1 w-full text-gray-600 mt-6">
                    Are you ready to explore the world? 🌍✨ Our app is your passport to unforgettable journeys
                </p>
            </div>

            <div className='w-full flex p-2 items-center justify-end'>
                <button onClick={() => router.push("/")}
                        className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100">
                    <Image src={ChevronIcon} loading={"eager"} alt={""}/>
                </button>
            </div>
        </div>
    )
}