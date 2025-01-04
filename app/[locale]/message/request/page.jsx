import React from 'react';
import BackButtonTitle from "@/components/ui/message/back-button-title";
import RequestCard from "@/components/ui/message-request/request-card";
import {useTranslations} from "next-intl";
function Page({params}) {

    const trans = useTranslations("translate")

    return (<section className="w-full page-up-animation flex py-3 flex-wrap items-center justify-between ">
        <BackButtonTitle content={trans("requests")}/>
        <RequestCard locale={params.locale} trans={trans} />
    </section>);
}

export default Page;