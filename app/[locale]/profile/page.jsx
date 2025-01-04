import React from 'react';
import CloseButtonSettingIcon from "@/components/ui/profile/close-button-setting-icon";
import ProfileButton from "@/components/ui/profile/profile-button";
import EditProfileSection from "@/components/ui/profile/edit-profile-section";
import ProfileMenuSection from "@/components/ui/profile/profile-menu-section";
import {useTranslations} from "next-intl";

function Page({params}) {
    const trans = useTranslations("translate")
    return (
        <section className="w-full page-up-animation min-h-svh bg-white p-4 content-start flex flex-wrap">
            <CloseButtonSettingIcon locale={params.locale} trans={trans}/>
            <ProfileButton locale={params.locale} trans={trans}/>
            <EditProfileSection trans={trans}/>
            <ProfileMenuSection trans={trans} locale={params.locale}/>
        </section>
    );
}

export default Page;