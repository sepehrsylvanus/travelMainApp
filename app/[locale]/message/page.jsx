import React from 'react';
import BackButtonTitle from "@/components/ui/message/back-button-title";
import RequestRow from "@/components/ui/message/request-row";
import TravelPlannerRow from "@/components/ui/message/travel-planner-row";
import SystemMessage from "@/components/ui/message/system-message";
import UserMessageRow from "@/components/ui/message/user-message-row";
import {useTranslations} from "next-intl";

function Page({params}) {
    const trans = useTranslations("translate")
    return (<section className="w-full page-up-animation flex py-3 flex-wrap items-center justify-between ">
            <BackButtonTitle content={trans("message")}/>
            <section className="w-full flex flex-wrap p-4 bg-white">
                <div className="w-full flex flex-wrap items-center gap-y-6 justify-between">
                    <RequestRow locale={params.locale} trans={trans}/>
                    <TravelPlannerRow trans={trans}/>
                    <SystemMessage trans={trans}/>
                    <UserMessageRow locale={params.locale} trans={trans}/>
                </div>
            </section>
        </section>);
}

export default Page;