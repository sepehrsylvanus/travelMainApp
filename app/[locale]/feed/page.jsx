"use client";
import React from "react";
import NavigationTop from "@/components/ui/navigation/navigation-top";
import SearchBox from "@/components/ui/search-box/search-box";
import CommentCard from "@/components/ui/comment-card/comment-card";
import { useTranslations } from "next-intl";
import { useGetPublicPosts } from "@/hooks/usePosts";
import { Loader } from "lucide-react";

function Page({ params }) {
  const { data: publicPosts = [], isLoading: publicPostsLoading } =
    useGetPublicPosts("", 0);
  const trans = useTranslations("translate");

  return (
    <section className="w-full flex flex-wrap content-start">
      <NavigationTop locale={params.locale} content={trans("feed")} />
      <SearchBox trans={trans} locale={params.params} />
      <section className="w-full bg-white flex flex-wrap  content-start p-4 pt-5 ">
        {publicPostsLoading ? (
          <div className="flex justify-center w-full mt-4">
            <Loader className="animate-spin" />
          </div>
        ) : (
          publicPosts.map((post) => <CommentCard post={post} trans={trans} />)
        )}
      </section>
    </section>
  );
}

export default Page;
