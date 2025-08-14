"use client";
import React from "react";
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import CommentIcon from "@/public/icons/comment-icon.svg";
import HeartIcon from "@/public/icons/heart-outline-icon.svg";
import { useTranslations } from "next-intl";
import { useGetUserPosts } from "@/hooks/usePosts";
import { Loader } from "lucide-react";

function Page() {
  const { data: userPosts, isLoading: userPostsLoading } = useGetUserPosts();
  console.log("🚀 ~ Page ~ userPosts:", userPosts);
  const trans = useTranslations("translate");
  function timeAgo(inputDate) {
    const input = new Date(inputDate);
    const now = new Date();
    const diffMs = now.getTime() - input.getTime();
    const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const isPast = diffMs > 0;

    if (diffDays > 0) {
      return isPast
        ? `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
        : `in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
    } else if (diffHours > 0) {
      return isPast
        ? `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
        : `in ${diffHours} hour${diffHours > 1 ? "s" : ""}`;
    } else if (diffMinutes > 0) {
      return isPast
        ? `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`
        : `in ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
    } else {
      return isPast
        ? `${diffSeconds} second${diffSeconds > 1 ? "s" : ""} ago`
        : `in ${diffSeconds} second${diffSeconds > 1 ? "s" : ""}`;
    }
  }

  const inputDate = "2025-08-13T01:31:50.685Z";
  console.log(timeAgo(inputDate));
  if (userPostsLoading) {
    return (
      <div className="flex justify-center w-full mt-4">
        <Loader className="animate-spin" />
      </div>
    );
  } else {
    return (
      <section className="w-full bg-gradient-to-b from-gray-50 to-white page-up-animation  min-h-svh  bg-white p-4 content-start flex flex-wrap">
        <div className="w-full flex py-3 flex-wrap items-center justify-between ">
          <div className="w-1/4 flex  items-start justify-start">
            <CloseButtonComponent />
          </div>
          <div className="w-2/4 flex items-center justify-center font-medium text-lg">
            {trans("My Posts")}
          </div>
          <div className="w-1/4"></div>
        </div>
        <section className="w-full flex space-y-3 flex-wrap mt-5 p-3">
          {userPosts.map((post) => (
            <article
              key={post.ID}
              className="w-full p-2 bg-white flex flex-wrap rounded-xl shadow "
            >
              <div className="w-full flex flex-wrap p-2 items-center justify-between">
                <figure className="w-auto gap-2 flex">
                  <Image
                    loading={"lazy"}
                    src={post.Image}
                    alt={""}
                    width={36}
                    height={36}
                  />
                  <figcaption className="w-1/2 flex flex-wrap">
                    <h5 className="text-sm">{post.User.FistName}</h5>
                    <h6 className="text-[10px] text-gray-500">
                      {post.Country.Name}
                    </h6>
                  </figcaption>
                </figure>
                <div className="w-auto text-gray-500 font-light text-[10px]">
                  {timeAgo(post.CreatedAt)}
                </div>
              </div>
              <div className="w-full flex flex-wrap p-2">
                <h4 className="w-full flex-wrap text-lg font-bold">
                  {post.Title}
                </h4>
                <p className="w-full flex text-justify py-2 font-medium text-[12px] text-gray-400">
                  {post.Content}
                </p>
              </div>

              <div className="w-full flex flex-wrap items-center justify-end p-2 ">
                <button className="hover:bg-gray-100 gap-1 text-sm text-gray-600 font-medium p-1 duration-300 rounded-lg flex items-center justify-center">
                  <Image
                    src={CommentIcon}
                    alt={"comment-icon"}
                    width={22}
                    height={22}
                  />
                  22
                </button>
                <button className="hover:bg-gray-100 gap-1 text-sm text-gray-600 font-medium p-1 duration-300 rounded-lg flex items-center justify-center">
                  <Image
                    src={HeartIcon}
                    alt={"heart-icon"}
                    width={22}
                    height={22}
                  />
                  22
                </button>
              </div>
            </article>
          ))}
        </section>
        <div className="w-full flex items-center justify-center py-3 text-gray-300 font-medium text-[12px]">
          {trans("Swipe right to delete")}
        </div>
      </section>
    );
  }
}

export default Page;
