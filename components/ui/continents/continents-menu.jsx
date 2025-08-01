"use client"; // اضافه کردن این خط برای مشخص کردن که کامپوننت یک Client Component است

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"; // استفاده از next/navigation
import GlobalIconBlue from "@/public/icons/global-blue-icon.svg";
import GlobalIcon from "@/public/icons/global-icon.svg";
import { useTranslations } from "next-intl";

function ContinentsMenu() {
  const trans = useTranslations("translate");

  const router = useRouter();
  const searchParams = useSearchParams();

  const continents = [
    { name: "All", icon: GlobalIconBlue, isActive: true, query: "all" },
    {
      name: "North Africa",
      icon: GlobalIcon,
      isActive: false,
      query: "north-africa",
    },
    {
      name: "Middle East",
      icon: GlobalIcon,
      isActive: false,
      query: "middle-east",
    },
    {
      name: "North Africa",
      icon: GlobalIcon,
      isActive: false,
      query: "north-africa",
    },
    {
      name: "North Africa",
      icon: GlobalIcon,
      isActive: false,
      query: "north-africa",
    },
    {
      name: "North Africa",
      icon: GlobalIcon,
      isActive: false,
      query: "north-africa",
    },
  ];

  const handleFilterClick = (query) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter", query); // اضافه کردن یا بروزرسانی query

    router.push(`?${params.toString()}`, { shallow: true });
  };
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <section className="w-full flex items-center flex-wrap mt-5 ps-6 py-4">
      <div
        className={
          "w-full items-center justify-start text-[12px] gap-2 flex flex-nowrap overflow-x-auto"
        }
      >
        {continents.map((continent, index) => (
          <div
            key={index}
            onClick={() => handleFilterClick(continent.query)}
            className={`cursor-pointer flex border min-w-fit overflow-hidden flex-nowrap text-nowrap ${
              continent.isActive
                ? "bg-blue-50 border-blue-200 text-blue-400"
                : "text-gray-500"
            } gap-1 p-2 rounded-full`}
          >
            <Image src={continent.icon} width={15} height={15} alt={""} />
            {trans(continent.name)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContinentsMenu;
