import React from "react";
import Link from "next/link";
import Image from "next/image";
import Trend1 from "@/public/images/trend-1.svg";
import Trend2 from "@/public/images/trend-2.svg";
import PersonIcon from "@/public/icons/person-icon.svg";
import LocationIcon from "@/public/icons/location-icon.svg";
import { getTravels } from "@/actions/travel";
import { useGetTravels } from "@/hooks/useTravels";
import { Loader } from "lucide-react";

// const trendingItems = [
//   {
//     image: Trend1,
//     title: "Dancing in mid night",
//     personCount: 128,
//     location: "Singapore",
//   },
//   {
//     image: Trend2,
//     title: "Dancing Dancing in mid night",
//     personCount: 128,
//     location: "Singapore",
//   },
//   {
//     image: Trend1,
//     title: "Dancing in mid night",
//     personCount: 128,
//     location: "Singapore",
//   },
//   {
//     image: Trend2,
//     title: "Dancing Dancing in mid night",
//     personCount: 128,
//     location: "Singapore",
//   },
// ];

function TrendingPlans({ trans, locale }) {
  const { data: travels = [], isLoading: travelsLoading } = useGetTravels(
    "trending",
    0
  );
  return (
    <section className="w-full flex flex-wrap">
      <div className="w-full flex flex-wrap font-medium items-center justify-between ps-6 p-2">
        <strong>{trans("Trending plans")}</strong>
        <Link
          scroll={false}
          className="text-blue-500 text-sm"
          href={`/${locale}/trending-plans`}
        >
          {trans("more")}
        </Link>
      </div>

      <section className="w-full flex flex-nowrap overflow-x-auto gap-4 items-center pb-5 ps-6 mt-[10px]">
        {travelsLoading ? (
          <div className="flex justify-center w-full mt-4">
            <Loader className="animate-spin" />
          </div>
        ) : (
          travels.map((item, index) => (
            <figure
              key={index}
              className="min-w-[135px] h-[145px] rounded-xl box-shadow overflow-hidden flex flex-wrap content-start justify-between"
            >
              <Image
                src={item.Image}
                width={135}
                height={87}
                className="rounded-xl"
                alt={`trend-${index + 1}`}
              />
              <figcaption
                className={"w-full h-[58px] p-2 flex flex-wrap content-between"}
              >
                <strong className="w-full flex h-2/3 text-[10px] line-clamp-2">
                  {item.Name}
                </strong>
                <div
                  className={
                    "w-full flex mt-1 h-1/3 items-center justify-between"
                  }
                >
                  <div className="w-1/2 text-[8px] gap-1 text-gray-500 flex items-center justify-start">
                    <Image
                      src={PersonIcon}
                      width={8}
                      height={8}
                      alt={"person-icon"}
                    />
                    {item.Count ?? 0}
                  </div>
                  <div className="w-1/2 text-[8px] gap-1 text-gray-500 flex items-center justify-end">
                    <Image
                      src={LocationIcon}
                      width={8}
                      height={8}
                      alt={"location-icon"}
                    />
                    {item.Country.Name}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))
        )}
      </section>
    </section>
  );
}

export default TrendingPlans;
