"use client";
import React, { useCallback, useEffect, useState } from "react";
import Step1Image from "@/public/intro/intro-1.svg";
import Step2Image from "@/public/intro/intro-2.svg";
import Step3Image from "@/public/intro/intro-3.svg";
import Step4Image from "@/public/intro/intro-4.svg";
import ChevronIcon from "@/public/icons/chevron-right.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { Axios } from "@/utils/axios";
import { cookieToken } from "@/actions/sessionActions";
function Page() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 5 && <Step5 setStep={setStep} />}
    </>
  );
}

export default Page;

const Step1 = ({ setStep }) => {
  return (
    <div className="w-full h-svh bg-white content-between px-4 justify-center flex flex-wrap">
      <div className="w-full flex p-2 items-center justify-end">
        <button className="text-lg font-medium active:scale-95 duration-100">
          Skip
        </button>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center">
        <Image
          src={Step1Image}
          loading={"eager"}
          alt={"Step1Image"}
          height={77}
          width={290}
        />
      </div>

      <div className="w-[290px] flex items-center justify-center flex-wrap">
        <h3 className="text-[26px] w-full text-center font-bold">
          Welcome to Travel Bff
        </h3>
        <p className="text-sm px-1 w-full text-gray-600 mt-6">
          Are you ready to explore the world? 🌍✨ Our app is your passport to
          unforgettable journeys
        </p>
      </div>

      <div className="w-full flex p-2 items-center justify-end">
        <button
          onClick={() => setStep(2)}
          className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100"
        >
          <Image src={ChevronIcon} loading={"eager"} alt={""} />
        </button>
      </div>
    </div>
  );
};
const Step2 = ({ setStep }) => {
  return (
    <div className="w-full h-svh  content-between px-4 justify-center flex flex-wrap bg-sky-400 relative">
      <div className="w-full flex p-2 items-center justify-end absolute top-2 right-2">
        <button className="text-lg font-medium active:scale-95 duration-100 z-10">
          Skip
        </button>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center">
        <Image
          src={Step2Image}
          loading={"eager"}
          alt={"Step1Image"}
          height={77}
          width={290}
          className="w-full   relative right-[1em]"
        />
      </div>

      <div className="w-[290px] flex items-center justify-center flex-wrap">
        <h3 className="text-[26px] w-full text-center font-bold">
          Welcome to Travel Bff
        </h3>
        <p className="text-sm px-1 w-full text-gray-600 mt-6">
          Are you ready to explore the world? 🌍✨ Our app is your passport to
          unforgettable journeys
        </p>
      </div>

      <div className="w-full flex p-2 items-center justify-end">
        <button
          onClick={() => setStep(3)}
          className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100"
        >
          <Image src={ChevronIcon} loading={"eager"} alt={""} />
        </button>
      </div>
    </div>
  );
};
const Step3 = ({ setStep }) => {
  return (
    <div className="w-full h-svh  content-between px-4 justify-center flex flex-wrap relative bg-[#FFEB7E]">
      <div className="w-full flex p-2 items-center justify-end absolute top-2 right-2">
        <button className="text-lg font-medium active:scale-95 duration-100">
          Skip
        </button>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center">
        <Image
          src={Step3Image}
          loading={"eager"}
          alt={"Step1Image"}
          height={50}
          width={290}
          className="relative right-[2.6em]"
        />
      </div>

      <div className="w-[290px] flex items-center justify-center flex-wrap">
        <h3 className="text-[26px] w-full text-center font-bold">
          Welcome to Travel Bff
        </h3>
        <p className="text-sm px-1 w-full text-gray-600 mt-6">
          Are you ready to explore the world? 🌍✨ Our app is your passport to
          unforgettable journeys
        </p>
      </div>

      <div className="w-full flex p-2 items-center justify-end">
        <button
          onClick={() => setStep(4)}
          className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100"
        >
          <Image src={ChevronIcon} alt={""} />
        </button>
      </div>
    </div>
  );
};
const Step4 = ({ setStep }) => {
  return (
    <div className="w-full h-svh bg-[#5CFF9D] content-between px-4 justify-center flex flex-wrap relative">
      <div className="w-full flex p-2 items-center justify-end absolute top-2 right-2 z-10">
        <button className="text-lg font-medium active:scale-95 duration-100">
          Skip
        </button>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center">
        <Image
          src={Step4Image}
          loading={"eager"}
          alt={"Step1Image"}
          height={77}
          width={290}
          className="relative left-[2.6em]"
        />
      </div>

      <div className="w-[290px] flex items-center justify-center flex-wrap">
        <h3 className="text-[26px] w-full text-center font-bold">
          Welcome to Travel Bff
        </h3>
        <p className="text-sm px-1 w-full text-gray-600 mt-6">
          Are you ready to explore the world? 🌍✨ Our app is your passport to
          unforgettable journeys
        </p>
      </div>

      <div className="w-full flex p-2 items-center justify-end">
        <button
          onClick={() => setStep(5)}
          className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100"
        >
          <Image src={ChevronIcon} loading={"eager"} alt={""} />
        </button>
      </div>
    </div>
  );
};
function Step5() {
  const [data, setData] = useState();

  const [fileUrl, setFileUrl] = useState(null);
  useEffect(() => {
    const firstLayerInitData = Object.fromEntries(
      new URLSearchParams(window.Telegram.WebApp.initData)
    );

    const initData = {};

    for (const key in firstLayerInitData) {
      try {
        initData[key] = JSON.parse(firstLayerInitData[key]);
      } catch {
        initData[key] = firstLayerInitData[key];
      }
    }

    setData(initData);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = (e) => setFileUrl(e.target.result);
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const router = useRouter();
  const handleFinalize = () => {
    Axios.post("188.245.54.147:8081/api/user/register", data)
      .then((res) => {
        const setToken = cookieToken(res.data);
        if (setToken) {
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-svh bg-white content-between px-4 justify-center flex flex-wrap relative">
      <div className="w-full flex p-2 items-center justify-end absolute top-2 right-2 z-10">
        <button className="text-lg font-medium active:scale-95 duration-100">
          Skip
        </button>
      </div>

      <div className="mt-4">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="flexCenter flex-col text-center rounded-md">
            <p className="flex-1 font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
              JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
            </p>
            <div className="my-12 w-full flex justify-center">
              {fileUrl ? (
                <img
                  src={fileUrl}
                  alt="Uploaded File"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              ) : (
                <Image
                  src={"/images/upload.png"}
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="File upload"
                  className="rounded-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[290px] flex items-center justify-center flex-wrap">
        <h3 className="text-[26px] w-full text-center font-bold">
          Welcome to Travel Bff
        </h3>
        <p className="text-sm px-1 w-full text-gray-600 mt-6">
          Are you ready to explore the world? 🌍✨ Our app is your passport to
          unforgettable journeys
        </p>
      </div>

      <div className="w-full">
        <p className="font-bold mb-2">Your name is</p>
        <input
          type="text"
          className="placeholder:text-gray-400 font-light p-3 w-full bg-transparent rounded-2xl border focus:outline-0 placeholder:text-sm"
          placeholder="Your full name"
        />
      </div>
      <div className="w-full">
        <p className="font-bold mb-2">Where you located</p>
        <select className="bg-white border border-gray-100 text-sm  focus:outline-0 w-full px-2 py-4 focus:border-none focus:ring-1 rounded-xl"></select>
      </div>
      <div className="w-full flex p-2 items-center justify-end">
        <button
          onClick={() => handleFinalize()}
          className="text-lg flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-gray-100 font-medium active:scale-95 duration-100"
        >
          <Image src={ChevronIcon} loading={"eager"} alt={""} />
        </button>
      </div>
    </div>
  );
}
