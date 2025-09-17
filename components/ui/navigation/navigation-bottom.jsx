"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomeIcon from "@/public/icons/icon-home.svg";
import WindowIcon from "@/public/icons/window-icon.svg";
import LocIcon from "@/public/icons/loc-icon.svg";
import Link from "next/link";
import HomeBlue from "@/public/icons/home-icon-blue.svg";
import WindowBlue from "@/public/icons/window-icon-blue.svg";
import LocBlue from "@/public/icons/loc-icon-blue.svg";
import { useParams, usePathname } from "next/navigation";

function NavigationBottom() {
  const { locale } = useParams();
  const pathname = usePathname(); // مسیر فعلی صفحه
  const [openNav, setOpenNav] = useState(false);

  // بررسی مسیر فعلی برای انتخاب آیکون مناسب
  const isHomeActive = pathname === `/${locale}` || pathname === "/";
  const isFeedActive = pathname === `/${locale}/feed`;
  const isNearbyActive = pathname === `/${locale}/nearby-people`;

  return (
    <nav className="w-full md:w-[375px] left-1/2 px-6 -translate-x-1/2 flex flex-wrap p-2 fixed bottom-0">
      <div className="w-full flex items-center justify-between">
        <div className="w-4/5 bg-white h-[54px] shadow rounded-2xl flex flex-wrap items-center justify-between p-2">
          <Link
            href={`/${locale}`}
            passHref
            prefetch
            className="w-1/3 flex items-center justify-center hover:bg-gray-50 duration-200 rounded-xl p-2"
          >
            <Image src={isHomeActive ? HomeBlue : HomeIcon} alt="home-icon" />
          </Link>
          <Link
            href={`/${locale}/feed`}
            passHref
            prefetch
            className="w-1/3 flex items-center justify-center hover:bg-gray-50 duration-200 rounded-xl p-2"
          >
            <Image
              src={isFeedActive ? WindowBlue : WindowIcon}
              alt="window-icon"
            />
          </Link>
          <Link
            href={`/${locale}/nearby-people`}
            passHref
            prefetch
            className="w-1/3 flex items-center justify-center hover:bg-gray-50 duration-200 rounded-xl p-2"
          >
            <Image src={isNearbyActive ? LocBlue : LocIcon} alt="loc-icon" />
          </Link>
        </div>
        <DialogNavigation locale={locale} open={openNav} />
        <div className="w-1/5 flex items-center justify-end">
          <button
            onClick={() => setOpenNav(!openNav)}
            className="flex items-center bg-blue-500 w-[54px] h-[54px] rounded-2xl justify-center active:scale-95 duration-150"
          >
            <span
              className={`text-2xl rounded-full text-white w-7 h-7 duration-300 flex items-center justify-center border ${
                openNav ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBottom;

import BooksIcon from "@/public/icons/books.svg";
import AirIcon from "@/public/icons/air.svg";
import GroupIcon from "@/public/icons/group.svg";
import ShareIcon from "@/public/icons/tips.svg";
import { useTranslations } from "next-intl";

const DialogNavigation = ({ open, locale }) => {
  const trans = useTranslations("translate");
  return (
    <div
      className={`w-[327px] min-h-[320px] shadow-xl absolute p-2 left-1/2 text-sm -translate-x-1/2 ${
        open ? "bottom-[80px] opacity-100" : "bottom-[-380px] opacity-0"
      } rounded-2xl duration-300 z-40 bg-white flex flex-wrap`}
    >
      <Link
        href={`/${locale}/tips-advice`}
        className="w-full flex  h-1/4 border-b px-3"
      >
        <Image src={BooksIcon} alt={"BooksIcon"} height={30} width={30} />
        <div className="flex-1 flex flex-wrap items-center p-2 px-5 content-center gap-y-1 ">
          <div className="w-full flex flex-wrap ">
            {trans("Travel Guide Tips")}
          </div>
          <div className="w-full flex flex-wrap text-xs text-gray-500">
            {trans("Share tips about traveling to countries")}
          </div>
        </div>
      </Link>
      <Link
        href={`/${locale}/plan/create`}
        className="w-full flex  h-1/4 border-b px-3"
      >
        <Image src={AirIcon} alt={"AirIcon"} height={30} width={30} />
        <div className="flex-1 flex flex-wrap items-center p-2 px-5 content-center gap-y-1 ">
          <div className="w-full flex flex-wrap ">
            {trans("Create Travel plan")}
          </div>
          <div className="w-full flex flex-wrap text-xs text-gray-500">
            {trans("Plan a future trip that travelers can join")}
          </div>
        </div>
      </Link>
      <Link
        href={`/${locale}/nearby-people/create`}
        className="w-full flex  h-1/4 border-b px-3"
      >
        <Image src={GroupIcon} alt={"GroupIcon"} height={30} width={30} />
        <div className="flex-1 flex flex-wrap items-center p-2 px-5 content-center gap-y-1 ">
          <div className="w-full flex flex-wrap ">
            {trans("Create Hangout")}
          </div>
          <div className="w-full flex flex-wrap text-xs text-gray-500 ">
            {trans("Plan a local meetup with nearby travelers")}
          </div>
        </div>
      </Link>
      <Link
        href={`/${locale}/tips-advice`}
        scroll={false}
        className="w-full flex  h-1/4 px-3"
      >
        <Image src={ShareIcon} alt={"ShareIcon"} height={30} width={30} />
        <div className="flex-1 flex flex-wrap items-center p-2 px-5 content-center gap-y-1 ">
          <div className="w-full flex flex-wrap ">
            {trans("Share Tips and Advice")}
          </div>
          <div className="w-full flex flex-wrap text-xs text-gray-500">
            {trans("Plan a future trip that travelers can join")}
          </div>
        </div>
      </Link>
    </div>
  );
};
