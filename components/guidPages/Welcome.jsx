"use client";
import { closeGuide, nextLevel } from "@/features/openGuide/openGuideSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative mt-8 ">
      <p
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => dispatch(closeGuide())}
      >
        Skip
      </p>
      <Image
        src={"/images/welcomeVector.svg"}
        alt="welcome"
        width={255}
        height={255}
        className="w-full h-full"
      />

      <h2 className="text-center">Welcome to Travel Bff</h2>
      <p className="text-center">
        Are you ready to explore the world? 🌍✨ Our app is your passport to
        unforgettable journeys
      </p>
      <div
        className="flex justify-end mt-24"
        onClick={() => dispatch(nextLevel())}
      >
        <Image
          src={"/images/nextBtn.svg"}
          alt="next"
          width={50}
          height={50}
          className="relative right-6"
        />
      </div>
    </div>
  );
};

export default Welcome;
