"use client";
import Image from "next/image";
import { useGetTravel } from "@/hooks/useTravels";
import { Loader } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Accordion = ({ children }) => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="mt-4">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openItem === index,
          onToggle: () => setOpenItem(openItem === index ? null : index),
        })
      )}
    </div>
  );
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-2 text-base font-semibold text-black hover:text-gray-800 flex justify-between items-center"
        onClick={onToggle}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

const TripPage = () => {
  const router = useRouter();
  const params = useParams();
  const planId = params.id;
  console.log(planId);
  const { data: plan, isLoading: planLoading } = useGetTravel(planId);
  useEffect(() => {
    console.log({ plan });
  }, [plan, planLoading]);

  if (planLoading) {
    return (
      <div className="grid place-content-center">
        <Loader className="animate-spin" />
      </div>
    );
  } else {
    return (
      <div className="mx-auto p-2 font-sans bg-white text-black">
        {/* Header با دکمه‌ها */}
        <div className="flex justify-between items-center mb-2">
          <Image
            onClick={() => router.back()}
            width={40}
            height={40}
            src={"/icons/close-icon.svg"}
            alt="Close"
          />
          <div className="flex gap-2">
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-xl">✎</span> {/* دکمه Edit */}
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-xl">↗</span> {/* دکمه Share */}
            </button>
          </div>
        </div>

        <div className="trip-header">
          <Image
            src="https://picsum.photos/id/237/1080/720"
            width={327}
            height={211}
            alt="Trip Image"
            className="rounded-lg mx-auto"
          />
          <div className="p-2">
            <h1 className="text-lg mb-4">Explore Amazing Cities</h1>
            <div className="flex flex-col gap-3 mb-2">
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="flex gap-2">
                  <Image
                    src={"/icons/calender-icon.svg"}
                    width={15}
                    height={15}
                    alt="Calendar"
                  />
                  Sep 17 - Sep 28
                </span>
              </p>
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="flex gap-2">
                  <Image
                    src={"/icons/person-icon.svg"}
                    width={15}
                    height={15}
                    alt="Traveler"
                  />
                  15 Traveler Joined this Plan
                </span>
              </p>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-2 w-full">
              View Group
            </button>
          </div>
        </div>

        <Accordion>
          <AccordionItem title="About Trip">
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              feugiat...
            </p>
          </AccordionItem>

          <AccordionItem title="Destinations">
            <div className="flex flex-col gap-2">
              <div className="destination">
                <Image
                  src="https://picsum.photos/id/238/150/100"
                  width={150}
                  height={100}
                  alt="Brazil"
                  className="w-full rounded-lg"
                />
                <p className="text-center text-sm">
                  Brazil
                  <br />
                  South America
                </p>
              </div>
              <div className="destination">
                <Image
                  src="https://picsum.photos/id/239/150/100"
                  width={150}
                  height={100}
                  alt="Cuba"
                  className="w-full rounded-lg"
                />
                <p className="text-center text-sm">
                  Cuba
                  <br />
                  South America
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Trip Interests">
            <div className="interests">
              <Image
                src="https://picsum.photos/id/240/400/100"
                width={400}
                height={100}
                alt="Beach"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm">Beach</p>
            </div>
          </AccordionItem>
        </Accordion>

        <div className="mt-4">
          <h2 className="text-base font-semibold mt-4">Managed by</h2>
          <div className="flex items-center gap-2">
            <Image
              src="https://picsum.photos/id/241/40/40"
              width={40}
              height={40}
              alt="Manager"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-sm">
              John Doe{" "}
              <a href="#" className="text-blue-500">
                View Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default TripPage;
