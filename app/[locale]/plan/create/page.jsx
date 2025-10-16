"use client";
import TitleCloseButtonComponent from "@/components/ui/plans/create/title-close-component";
import React from "react";
import Image from "next/image";
import ImageInput from "@/public/images/add-image.svg";
import DatePickerComponent from "@/components/ui/date-picker/date-picker-component";
import InputLabel from "@/components/ui/inputs/input-label";
import IconPlus from "@/public/icons/close-icon.svg";
import { useTranslations } from "next-intl";

export default function Page() {
  const trans = useTranslations("translate");

  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      <TitleCloseButtonComponent trans={trans} />

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Image Upload Section */}
        <div className="w-full px-4 pt-6 pb-4">
          <label
            htmlFor="dropzone-file"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-[320px] bg-gray-50 rounded-2xl"
          >
            <Image
              width={80}
              height={80}
              src={ImageInput}
              alt="Add Image"
              className="opacity-40 w-full h-full"
            />
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        {/* Date Pickers */}
        <div className="w-full flex gap-3 px-4 mb-4">
          <div className="flex-1">
            <div className="w-full py-4 px-4 bg-white border border-gray-200 rounded-2xl">
              <DatePickerComponent
                label={trans("Arriving")}
                defaultValue="2024-09-17"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full py-4 px-4 bg-white border border-gray-200 rounded-2xl">
              <DatePickerComponent
                label={trans("Departing")}
                defaultValue="2024-09-17"
              />
            </div>
          </div>
        </div>

        {/* Plan Name Input */}
        <div className="w-full px-4 mb-4">
          <InputLabel
            placeholder={trans("Example: Going to Oman")}
            label={trans("Plan Name")}
          />
        </div>

        {/* About Trip Input */}
        <div className="w-full px-4 mb-6">
          <InputLabel
            placeholder={trans("Going to Oman")}
            label={trans("About Trip")}
          />
        </div>

        {/* Destinations Section */}
        <div className="w-full px-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-black">
                {trans("Destinations")}
              </h4>
              <span className="text-gray-400 text-xs">10 {trans("max")}</span>
            </div>
            <button className="rounded-xl bg-white border border-gray-200 w-11 h-11 flex items-center justify-center">
              <Image src={IconPlus} alt="Add" className="w-6 h-6 rotate-45" />
            </button>
          </div>
        </div>

        {/* Trip Interests Section */}
        <div className="w-full px-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-black">
                {trans("Trip Interests")}
              </h4>
              <span className="text-gray-400 text-xs">5 {trans("max")}</span>
            </div>
            <button className="rounded-xl bg-white border border-gray-200 w-11 h-11 flex items-center justify-center">
              <Image src={IconPlus} alt="Add" className="w-6 h-6 rotate-45" />
            </button>
          </div>
        </div>

        {/* Private Plan Toggle */}
        <div className="w-full px-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-black mb-1">
                {trans("Private Plan")}
              </h4>
              <span className="text-gray-400 text-xs">
                {trans("Manually Approve Participations")}
              </span>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-12 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-[22px] peer-checked:bg-gray-800 after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:rounded-full after:h-[22px] after:w-[22px] after:transition-all"></div>
            </label>
          </div>
        </div>

        {/* Post Button */}
        <div className="w-full px-4 pt-2">
          <button className="w-full rounded-2xl py-4 bg-blue-500 text-white text-lg font-semibold">
            {trans("Post")}
          </button>
        </div>
      </div>
    </section>
  );
}
