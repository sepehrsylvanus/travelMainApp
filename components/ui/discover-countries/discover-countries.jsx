"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imagePostItem from "@/public/images/Rectangle 44.svg";
import { useGetCountries } from "@/hooks/useCountries";
import { Loader } from "lucide-react";

function DiscoverCountries({ trans, locale }) {
  const { data: countries = [], isLoading: countriesLoading } =
    useGetCountries();
  const clearCountries = countries.map((country) => ({
    ...country,
    Image:
      country.Image === "-"
        ? "https://picsum.photos/id/237/1080/720"
        : country.Image,
  }));
  return (
    <section className="w-full bg-main-background-lite flex flex-wrap">
      <div className="w-full flex flex-wrap font-medium items-center justify-between ps-6 p-2">
        <strong>{trans("Discover countries")}</strong>
        <Link
          scroll={false}
          className="text-blue-500 text-sm"
          href={`/${locale}/browse-countries`}
        >
          {trans("more")}
        </Link>
      </div>
      <section className="w-full ps-6 gap-3 overflow-x-auto flex items-start justify-normal flex-nowrap">
        {countriesLoading ? (
          <div className="flex justify-center w-full mt-4">
            <Loader className="animate-spin" />
          </div>
        ) : (
          clearCountries.map((country, index) => (
            <figure
              key={index}
              className="min-w-[135px] flex-grow flex items-center justify-center h-[87px] rounded-xl relative"
            >
              <Image
                src={country.Image}
                alt={country.Name}
                className="filter saturate-50"
                width={135}
                height={87}
              />
              <figcaption className="absolute text-[10px] text-white top-1/2 -translate-y-1/2">
                {country.Name}
              </figcaption>
            </figure>
          ))
        )}
      </section>
    </section>
  );
}

export default DiscoverCountries;
