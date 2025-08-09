"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import GlobalIconBlue from "@/public/icons/global-blue-icon.svg";
import GlobalIcon from "@/public/icons/global-icon.svg";
import { useTranslations } from "next-intl";
import { getContinents } from "@/actions/homepage";
import { Divide, Loader } from "lucide-react";

function ContinentsMenu() {
  const trans = useTranslations("translate");
  const [continents, setContinents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const correctContinents = continents.map((continent) => {
    return {
      ...continent,
      Image:
        continent.Image === "-"
          ? "https://picsum.photos/id/237/1080/720"
          : continent.Image,
    };
  });
  useEffect(() => {
    const func = async () => {
      const continents = await getContinents();
      setContinents(continents);
      setIsLoading(false);
    };
    func();
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();

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
  if (isLoading) {
    return (
      <div className="flex justify-center w-full mt-4">
        <Loader className="animate-spin" />
      </div>
    );
  } else {
    return (
      <section className="w-full flex items-center flex-wrap mt-5 ps-6 py-4">
        <div
          className={
            "w-full items-center justify-start text-[12px] gap-2 flex flex-nowrap overflow-x-auto"
          }
        >
          {correctContinents.map((continent, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(continent.query)}
              className={`cursor-pointer flex border min-w-fit overflow-hidden flex-nowrap text-nowrap ${
                continent.isActive
                  ? "bg-blue-50 border-blue-200 text-blue-400"
                  : "text-gray-500"
              } gap-1 p-2 rounded-full`}
            >
              <Image src={continent.Image} width={15} height={15} alt={""} />
              {continent.Name}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ContinentsMenu;
