"use client";
import React from "react";
import PageTitleBackButton from "@/components/ui/page-title-back-button/page-title-back-button";
import Image from "next/image";
import { interestsStaticData } from "@/utils/mock/mock-data";
import { useGetInterest } from "@/hooks/useInterest";
import { Loader } from "lucide-react";

function Page() {
  const { data: interests = [], isLoading: interestsLoading } =
    useGetInterest();
  const cleareInterests = interests.map((interest) => ({
    ...interest,
    Image:
      interest.Image === "-"
        ? "https://picsum.photos/id/237/1080/720"
        : interest.Image,
  }));

  return (
    <section className="w-full flex page-up-animation bg-white flex-wrap">
      <PageTitleBackButton content={"Browse Interests"} />
      <section className="w-full flex flex-wrap space-y-3 py-3 mt-5 bg-white content-start justify-center h-auto">
        {interestsLoading ? (
          <div className="flex justify-center w-full mt-4">
            <Loader className="animate-spin" />
          </div>
        ) : (
          cleareInterests?.map((item, index) => (
            <figure
              key={index}
              className="flex h-[64px] w-[327px] rounded-lg relative"
            >
              <Image
                src={item?.Image}
                alt={"images"}
                width={327}
                height={64.57}
              />
              <figcaption className="absolute top-1/2  font-bold text-white left-1/2 -translate-x-1/2 -translate-y-1/2">
                {item?.Name}
              </figcaption>
            </figure>
          ))
        )}
      </section>
    </section>
  );
}

export default Page;
