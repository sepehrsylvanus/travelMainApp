"use client";
import React, { useState } from "react";
import Image from "next/image";

function AccordionCountryEvent() {
    const [accStatus, setAccStatus] = useState(null);

    const staticAcc = [
        {
            id: 0,
            title: "Row 1",
            description: "Description 1",
        },
        {
            id: 1,
            title: "Row 2",
            description: "Description 2",
        },
        {
            id: 2,
            title: "Row 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
    ];

    return (
        <div className="w-full flex flex-wrap">
            {staticAcc?.map((item, index) => (
                <div key={index} className="w-full flex flex-wrap min-h-[42px] border rounded-lg mb-2">
                    <div className="w-full flex flex-wrap items-center px-2 justify-between h-[42px] cursor-pointer"
                         onClick={() => setAccStatus(item?.id === accStatus ? null : item?.id)}>
                        <h4 className={`${accStatus === item?.id ? 'text-gray-800' : 'text-gray-400'}`}>{item?.title}</h4>
                        <button className="p-2 rounded-lg duration-100 hover:bg-gray-50 flex items-center justify-center">
                            <Image
                                src={"/icons/arrow-circle-down-icon.svg"}
                                alt={"arrow-down"}
                                width={15}
                                height={15}
                                className={`transform transition-transform duration-300 ${accStatus === item?.id ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>
                    <div
                        className={`w-full flex flex-wrap items-start justify-between overflow-hidden transition-all duration-300 ${
                            accStatus === item?.id ? "max-h-96" : "max-h-0"
                        }`}
                    >
                        <p className="w-full p-2 text-gray-400 text-sm">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccordionCountryEvent;
