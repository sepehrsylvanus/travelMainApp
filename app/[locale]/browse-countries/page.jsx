"use client";
import React from "react";
import ArrowRightIcon from "@/public/icons/arrow-right-icon.svg";
import CountryIcon from "@/public/icons/country-icon.svg";
import Image from "next/image";
import SearchBox from "@/components/ui/search-box/search-box";
import DiscoverCountries from "@/components/ui/discover-countries/discover-countries";
import PageTitleBackButton from "@/components/ui/page-title-back-button/page-title-back-button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const continents = [
    { name: "Europe", href: "/explore-interests" },
    { name: "Asia", href: "/explore-interests" },
    { name: "Africa", href: "/explore-interests" },
    { name: "North America", href: "/explore-interests" },
];

function Page() {
    const trans = useTranslations("translate");
    const { locale } = useParams();

    return (
        <section className="w-full flex page-up-animation flex-wrap">
            <PageTitleBackButton content="Browse Countries" />
            <SearchBox trans={trans} />
            <section className="w-full flex flex-wrap items-center py-4 bg-white">
                <DiscoverCountries trans={trans} locale={locale} />
            </section>
            <section className="w-full flex flex-wrap items-center ps-6 py-4 bg-white">
                <h3 className="w-full flex flex-wrap text-xl font-bold pb-3">
                    {trans("Continents")}
                </h3>
                {continents.map((continent, index) => (
                    <Link
                        href={`/${locale}`+continent.href}
                        passHref
                        prefetch
                        key={index}
                        className="w-full my-2 flex flex-wrap items-center justify-between"
                    >
                        <figure className="w-5/6 gap-2 flex items-center">
                            <Image
                                src={CountryIcon}
                                alt="country-image"
                                className="rounded-full"
                                width={36}
                                height={36}
                            />
                            <figcaption className="flex w-auto line-clamp-1 truncate">
                                {continent.name}
                            </figcaption>
                        </figure>
                        <div className="w-1/6 flex items-center justify-end">
                            <button className="w-auto p-3 rounded hover:bg-gray-50 duration-100">
                                <Image
                                    src={ArrowRightIcon}
                                    alt="arrow-right"
                                    width={5.37}
                                    height={10.84}
                                />
                            </button>
                        </div>
                    </Link>
                ))}
            </section>
        </section>
    );
}

export default Page;
