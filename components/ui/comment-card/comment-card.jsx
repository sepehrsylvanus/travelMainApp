import React from "react";
import Image from "next/image";
import PersonImage from "@/public/images/person-icon.svg";
import CommentIcon from "@/public/icons/comment-icon.svg";
import HeartIcon from "@/public/icons/heart-icon.svg";

function CommentCard({ trans, post }) {
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

  return (
    <article className="w-full flex content-start flex-wrap pb-5 border-b">
      <div className="w-full flex flex-wrap p-2 items-center justify-between">
        <figure className="w-auto gap-2 flex">
          <Image
            src={"https://picsum.photos/id/237/1080/720"}
            alt={""}
            width={36}
            height={36}
          />
          <figcaption className="w-1/2 flex flex-wrap">
            <h5 className="text-sm">{post.User.FirstName}</h5>
            <h6 className="text-[10px] text-gray-500">{post.Country.Name}</h6>
          </figcaption>
        </figure>
        <div className="w-auto text-gray-500 font-light text-[10px]">
          {timeAgo(post.CreatedAt)}
        </div>
      </div>
      <h3 className="w-full flex flex-wrap p-2 font-bold">{post.Title}</h3>
      <p className="w-full flex flex-wrap p-2 font-medium text-gray-500 text-[10px]">
        {post.Content}
      </p>
      <div className="w-full flex flex-wrap  gap-2 items-center justify-end px-2">
        <div className={"flex flex-wrap items-center gap-1"}>
          <Image
            src={CommentIcon}
            alt={"comment-icon"}
            width={22}
            height={22}
          />
          34
        </div>
        <div className={"flex flex-wrap items-center gap-1"}>
          <Image src={HeartIcon} alt={"comment-icon"} width={22} height={22} />1
        </div>
      </div>
    </article>
  );
}

export default CommentCard;
