import React from 'react';
import NavigationTop from "@/components/ui/navigation/navigation-top";
import SearchBox from "@/components/ui/search-box/search-box";
import CommentCard from "@/components/ui/comment-card/comment-card";
import {useTranslations} from "next-intl";

function Page({params}) {

    const trans = useTranslations("translate")

    return (
        <section className="w-full flex flex-wrap content-start">
            <NavigationTop locale={params.locale} content={trans("feed")}/>
            <SearchBox trans={trans} locale={params.params}/>
            <section className="w-full bg-white flex flex-wrap  content-start p-4 pt-5 ">
                <CommentCard trans={trans}/>
                <CommentCard trans={trans}/>
                <CommentCard trans={trans}/>
            </section>
        </section>
    );
}

export default Page;