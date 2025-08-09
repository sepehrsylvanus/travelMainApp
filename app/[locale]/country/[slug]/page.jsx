"use client";
import React from "react";
import Image from "next/image";
import AlbaniaBeach from "@/public/icons/arrow-right-icon.svg";
import BackHistoryButton from "@/components/ui/buttons/back-history-button";
import CountryTabs from "@/components/ui/tabs/countryTabs";
import { useTranslations } from "next-intl";
import { useGetCountries } from "@/hooks/useCountries";
import { useParams } from "next/navigation";

function Page() {
  const { data: countries = [] } = useGetCountries();
  const trans = useTranslations("translate");
  const { slug: id } = useParams();

  const country = countries?.find((c) => c.ID === id);

  if (!country) {
    return <div className="w-full text-center py-10">Loading country...</div>;
  }

  const countryImage =
    country.Image === "-" ? "https://picsum.photos/375/228" : country.Image;
  const followers = country.Posts?.length || 390;

  return (
    <section className="w-full flex page-up-animation pb-16 bg-white flex-wrap">
      <figure className="flex flex-wrap mb-4 relative w-full md:w-[375.81px] h-[228.12px]">
        <Image
          src={countryImage}
          alt={`${country.Name}-beach`}
          className="w-full"
          width={375.81}
          height={228.12}
        />
        <div className="absolute top-5 left-5">
          <BackHistoryButton />
        </div>
      </figure>
      <div className="w-full flex flex-wrap items-center p-3 px-6">
        <div className="w-2/3 flex flex-wrap">
          <div className="w-full text-lg font-medium">
            {trans(country.Name)}
          </div>
          <div className="w-full text-[12px] text-gray-400">
            {followers} {trans("followers")}
          </div>
        </div>
        <div className="w-1/3 px-2 flex items-center justify-end">
          <button className="p-2 rounded-lg border border-blue-400 text-blue-400 font-medium">
            {trans("Follow")}
          </button>
        </div>
        <div className="w-full border-b mt-5"></div>
      </div>
      <CountryTabs trans={trans} />
    </section>
  );
}

export default Page;
