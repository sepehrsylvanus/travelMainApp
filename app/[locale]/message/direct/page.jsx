import React from 'react';
import BackButtonUsername from "@/components/ui/message-direct/back-button-username";
import TextMessageBox from "@/components/ui/message-direct/text-message-box";
import SendPostReplay from "@/components/ui/message-direct/send-post-replay";
import {useTranslations} from "next-intl";

function Page({params}) {
    const trans = useTranslations("translate")
    return (<section
        className="w-full bg-gradient-to-b from-white to-gray-50 page-up-animation flex py-3 flex-wrap h-full items-center justify-between ">
        <BackButtonUsername/>
        <TextMessageBox trans={trans}/>
        <SendPostReplay trans={trans}/>
    </section>);
}

export default Page;