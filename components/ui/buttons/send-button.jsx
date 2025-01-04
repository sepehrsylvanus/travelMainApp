"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import SendIcon from "@/public/icons/send-icon.svg";
import ProfileImage from "@/public/images/share-profile-image.svg"
import ProfileMapImage from "@/public/images/share-profile-map.svg"

function SendButton() {
    const [showProfile, setShowProfile] = useState(false);

    const closeProfileOnOutsideClick = (e) => {
        if ((e.target).closest(".drawer") === null) {
            setShowProfile(false);
        }
    };

    useEffect(() => {
        if (showProfile) {
            document.addEventListener("click", closeProfileOnOutsideClick);
        } else {
            document.removeEventListener("click", closeProfileOnOutsideClick);
        }
        return () => {
            document.removeEventListener("click", closeProfileOnOutsideClick);
        };
    }, [showProfile]);

    return (
        <div>
            <button
                onClick={() => setShowProfile(true)}
                className="hover:bg-gray-50 rounded-lg p-1 duration-100"
            >
                <Image src={SendIcon} alt={"send-icon"} width={20} height={20}/>
            </button>

            {showProfile && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-end z-50">
                    <div className="drawer bg-white rounded-t-lg p-4 w-full sm:w-96 animate-slide-up">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowProfile(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h3 className="text-gray-600 text-sm">share profile</h3>
                        </div>
                        {/* Profile Info */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <Image
                                src={ProfileImage}
                                alt="Profile"
                                width={112}
                                height={100}
                                className="object-cover"
                            />
                            <div
                                className="flex flex-wrap py-2 bg-gradient-to-bl from-[#D45AFF] via-[#7177FF] to-[#9C8BFF] content-between  text-white w-[100px]  gap-y-1 h-28 rounded-xl shadow">
                                <div className='w-full flex h-1/3 flex-wrap border-b border-b-gray-300  px-2'>

                                    <h3 className="w-full text-[10px] font-bold flex flex-wrap ">Sara ,25</h3>
                                    <span className='text-[8px]'>Italy</span>

                                </div>

                                <div className='w-full flex h-1/3 flex-wrap border-b border-b-gray-300  px-2'>

                                    <h3 className="w-full text-[10px] font-bold flex flex-wrap ">204</h3>
                                    <span className='text-[8px]'>rank</span>

                                </div>
                                <div className='w-full flex h-1/3 flex-wrap  px-2'>

                                    <h3 className="w-full text-[10px] font-bold flex flex-wrap ">29 Trip</h3>
                                    <span className='text-[8px]'>around the world</span>

                                </div>

                            </div>
                            {/* Travel Stats */}
                            <div className="flex h-full w-[110px] flex-wrap items-center justify-between mb-4">
                                <div className="text-gray-600 text-sm">Travel stats</div>
                                <Image
                                    src={ProfileMapImage}
                                    alt="Map"
                                    width={112}
                                    height={100}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="mb-4 bg-white rounded-2xl shadow-xl  p-3 w-full">
                            <h4 className="text-gray-500 text-sm">Interests</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Reading", "Cycling", "Running", "Gaming", "Meditation", "Painting"].map((interest) => (
                                    <div
                                        key={interest}
                                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                                    >
                                        {interest}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Additional Info */}
                        <div className="grid grid-cols-2 gap-2 mb-4 ">
                            <div className="bg-white rounded-2xl shadow-xl  p-3  gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Education</div>
                                <div className="text-sm">Bachelor&#39;s Degree</div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl  p-3 gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Travel Style</div>
                                <div className="text-sm">Occasionally</div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl  p-3 gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Religion</div>
                                <div className="text-sm">Not religious</div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl  p-3 gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Drink</div>
                                <div className="text-sm">I used to</div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl  p-3 gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Diet</div>
                                <div className="text-sm">No specific diet</div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl  p-3 gap-y-1.5 flex flex-wrap">
                                <div className="w-full text-gray-500 text-sm">Smoke</div>
                                <div className="text-sm">I used to</div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="flex w-full justify-center items-center">
                            <div className="text-xs text-gray-400">Created by @sara_fathi</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SendButton;