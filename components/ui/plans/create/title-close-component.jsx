"use client"
import React from 'react'
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";

function TitleCloseButtonComponent({trans}) {
    return (
        <div className="w-full flex py-3 flex-wrap items-center justify-between ">
            <div className="w-1/4 flex px-4 items-start justify-start">
                <CloseButtonComponent/>
            </div>
            <div className="w-2/4 flex items-center justify-center font-medium text-lg">
                {trans("Create a new Plan")}
            </div>
            <div className="w-1/4"></div>
        </div>
    )
}

export default TitleCloseButtonComponent
