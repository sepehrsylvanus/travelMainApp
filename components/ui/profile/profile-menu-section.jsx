import React from "react";
import Link from "next/link";
import Image from "next/image";
import RankIcon from "@/public/icons/rank-icon.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";
import TripsIcon from "@/public/icons/trips-icon.svg";
import AirPlaneIcon from "@/public/icons/airplace-icon.svg";
import PostMessageIcon from "@/public/icons/message-posts-icon.svg";
import FriendIcon from "@/public/icons/friend-person-icon.svg";

function ProfileMenuSection({ trans, locale, userProfile }) {
  console.log("🚀 ~ ProfileMenuSection ~ userProfile:", userProfile);
  return (
    <section className="w-full flex flex-wrap content-start space-y-2 mt-5">
      <Link
        scroll={false}
        passHref
        prefetch={true}
        href={`/${locale}/profile/my-rank`}
        className="w-full flex justify-between items-stretch"
      >
        <div className="w-3/4 overflow-hidden">
          <div className="flex w-full ">
            <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
              <Image
                src={RankIcon}
                alt={"person-icon"}
                width={30}
                height={30}
              />
            </figure>
            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
              <div className="font-medium text-sm text-gray-700">
                {trans("Your Rank")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-wrap items-center justify-end">
          <button className="p-2 gap-1 rounded-lg hover:bg-gray-50 flex items-center duration-100">
            <span className="text-[12px] text-gray-700 font-bold">
              {userProfile.Rank ?? 0}
            </span>
            <Image
              src={ArrowLeftIcon}
              alt={"arrow-left-icon"}
              className="rotate-180"
              width={14}
              height={14}
            />
          </button>
        </div>
      </Link>
      <Link
        scroll={false}
        passHref
        prefetch={true}
        href={`/${locale}/profile/my-trips`}
        className="w-full flex justify-between items-stretch"
      >
        <div className="w-3/4 overflow-hidden">
          <div className="flex w-full ">
            <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
              <Image
                src={TripsIcon}
                alt={"My Upcoming Trips"}
                width={30}
                height={30}
              />
            </figure>
            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
              <div className="font-medium text-sm text-gray-700 truncate">
                {trans("My Upcoming Trips")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-wrap items-center justify-end">
          <button className="p-2 gap-1 rounded-lg hover:bg-gray-50 flex items-center duration-100">
            <span className="text-[12px] text-gray-700 font-bold"></span>
            <Image
              src={ArrowLeftIcon}
              alt={"arrow-left-icon"}
              className="rotate-180"
              width={14}
              height={14}
            />
          </button>
        </div>
      </Link>
      <Link
        scroll={false}
        passHref
        prefetch={true}
        href={`/${locale}/profile/my-travel-plans`}
        className="w-full flex justify-between items-stretch"
      >
        <div className="w-3/4 overflow-hidden">
          <div className="flex w-full ">
            <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
              <Image
                src={AirPlaneIcon}
                alt={"AirPlaneIcon"}
                width={30}
                height={30}
              />
            </figure>
            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
              <div className="font-medium text-sm text-gray-700">
                {trans("My Travel Plans")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-wrap items-center justify-end">
          <button className="p-2 gap-1 rounded-lg hover:bg-gray-50 flex items-center duration-100">
            <span className="text-[12px] text-gray-700 font-bold"></span>
            <Image
              src={ArrowLeftIcon}
              alt={"arrow-left-icon"}
              className="rotate-180"
              width={14}
              height={14}
            />
          </button>
        </div>
      </Link>
      <Link
        scroll={false}
        passHref
        prefetch={true}
        href={`/${locale}/profile/my-posts`}
        className="w-full flex justify-between items-stretch"
      >
        <div className="w-3/4 overflow-hidden">
          <div className="flex w-full ">
            <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
              <Image
                src={PostMessageIcon}
                alt={"post-message-icon"}
                width={30}
                height={30}
              />
            </figure>
            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
              <div className="font-medium text-sm text-gray-700">
                {trans("My Posts")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-wrap items-center justify-end">
          <button className="p-2 gap-1 rounded-lg hover:bg-gray-50 flex items-center duration-100">
            <span className="text-[12px] text-gray-700 font-bold"></span>
            <Image
              src={ArrowLeftIcon}
              alt={"arrow-left-icon"}
              className="rotate-180"
              width={14}
              height={14}
            />
          </button>
        </div>
      </Link>
      <Link
        scroll={false}
        passHref
        prefetch={true}
        href={`/${locale}/profile/my-friends`}
        className="w-full flex justify-between items-stretch"
      >
        <div className="w-3/4 overflow-hidden">
          <div className="flex w-full ">
            <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
              <Image
                src={FriendIcon}
                alt={"My Friends"}
                width={30}
                height={30}
              />
            </figure>
            <div className={"w-2/3 flex flex-wrap truncate items-center"}>
              <div className="font-medium text-sm text-gray-700">
                {trans("My Friends")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-wrap items-center justify-end">
          <button className="p-2 gap-1 rounded-lg hover:bg-gray-50 flex items-center duration-100">
            <span className="text-[12px] text-gray-700 font-bold"></span>
            <Image
              src={ArrowLeftIcon}
              alt={"arrow-left-icon"}
              className="rotate-180"
              width={14}
              height={14}
            />
          </button>
        </div>
      </Link>
    </section>
  );
}

export default ProfileMenuSection;
