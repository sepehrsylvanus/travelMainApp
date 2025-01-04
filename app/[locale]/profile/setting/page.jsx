"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {useTranslations} from "next-intl";

export default function SettingsPage() {
    const [locale, setLocale] = useState('en');
    const router = useRouter();
    const trans = useTranslations("translate")
    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale) {
            setLocale(storedLocale);
        }
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ru' : 'en';
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
        setTimeout(() => {
            router.push(`/${newLocale}`);
        } , 1000)
    };

    return (
        <div className="flex w-full flex-wrap  content-start justify-center gap-y-2 h-screen">
            <div className="w-full p-4 text-xl text-center shadow-sm bg-white rounded-b">
                {trans("settings")}
            </div>
            <div className='w-full h-full flex flex-wrap  content-star '>
                <div className="w-full flex flex-wrap p-2 rounded-xl h-12">
                    <div className='w-full flex items-center justify-end h-full'>
                        <label className="inline-flex items-center cursor-pointer w-full rounded-lg bg-white px-2 justify-between h-12">
                            <div>
                                <input onChange={toggleLanguage}  type="checkbox" checked={locale === "en"} className="sr-only peer"/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-700"></div>
                            </div>
                            {locale === 'en' ? trans("Switch to Russian") : trans("Switch to English")}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
