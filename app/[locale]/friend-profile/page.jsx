import React from "react";
import Image from "next/image";
import UserProfileImage from "@/public/images/user-profile.svg";
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";
import CrownIcon from "@/public/icons/crown-icon.svg";
import TelegramIcon from "@/public/icons/telgram-chanel2-icon.svg";
import ItalyImage from "@/public/flag/italy-flag-icon.svg";
import MessageIcon from "@/public/icons/message-icon-gray.svg";
import AddFriendIcon from "@/public/icons/add-friend-icon.svg";
import BookIcon from "@/public/icons/book-icon.svg";
import ColorIcon from "@/public/icons/color-icon.svg";
import GameIcon from "@/public/icons/game-icon.svg";
import DanceIcon from "@/public/icons/dance-icon.svg";
import InstagramDisableIcon from "@/public/icons/instagram-disable-icon.svg";
import TikTokDisableIcon from "@/public/icons/tiktok-icon.svg";
import WorldImage from "@/public/images/world-image.svg";

import Link from "next/link";
import TurkeyFlag from "@/public/flag/turkey.svg";
import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";
import ConcertImage from "@/public/images/concert-image.svg";
import CalenderIcon from "@/public/icons/calender-icon.svg";
import PersonIcon from "@/public/icons/person-icon.svg";
import ReactWorldMap from "@/app/[locale]/friend-profile/_component/react-world-map";
import { useTranslations } from "next-intl";

function Page({ params }) {
  const trans = useTranslations("translate");

  return (
    <section className="w-full overflow-x-hidden flex page-up-animation pb-24 bg-white flex-wrap">
      <figure className="flex flex-wrap relative w-full md:w-[375.81px] h-fit">
        <Image
          src={UserProfileImage}
          className="object-cover w-full"
          alt={"UserProfileImage"}
          width={375}
          height={375}
        />
        <div className="absolute flex items-center justify-between px-5 top-5 w-full">
          <CloseButtonComponent />
          <div className="items-center flex gap-2">
            <div className="bg-gradient-to-l px-2.5 h-8 rounded-lg flex items-center gap-2 to-[#FFD644] p-1 from-[#FF68C7]">
              <Image src={CrownIcon} alt="" width={20} height={20} />
              <span className="font-medium text-white text-sm">3204</span>
            </div>
            <div>
              <button className="bg-white h-[32px] w-[32px] flex items-center justify-center rounded-lg">
                <Image src={TelegramIcon} alt="" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full rounded-t-3xl bg-white -translate-y-3  p-2 relative bottom-0">
          <div className="w-full flex flex-wrap absolute content-center transform -translate-y-14 justify-center text-white">
            <h3 className="w-full text-center  font-bold">Cherken</h3>
            <figure className="w-full flex gap-2 flex-wrap items-center justify-center">
              <Image src={ItalyImage} alt={"ItalyImage"} width={8} height={8} />
              <span className="text-[12px] tracking-[4px]">Italy</span>
            </figure>
          </div>
        </div>
      </figure>
      <section className="w-full justify-between  items-center flex flex-wrap ">
        <div className="w-full flex px-4 pb-5 items-center justify-between ">
          <Link
            href={`/${params.locale}/message`}
            passHref
            prefetch={true}
            className="flex items-center justify-center border rounded-xl w-[156px] h-[48px] gap-2"
          >
            <Image
              src={MessageIcon}
              alt={"MessageIcon"}
              width={18}
              height={18}
            />
            <span className="text-gray-700 text-sm">{trans("message")}</span>
          </Link>
          <Link
            href={"/message"}
            passHref
            prefetch={true}
            className="flex items-center justify-center border rounded-xl w-[156px] h-[48px] gap-2"
          >
            <Image
              src={AddFriendIcon}
              alt={"AddFriendIcon"}
              width={18}
              height={18}
            />
            <span className="text-gray-700 text-sm">{trans("Add Friend")}</span>
          </Link>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Interests")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image src={BookIcon} alt={"BookIcon"} width={18} height={18} />
              <span className="text-gray-700 text-sm">
                {trans("Add Friend")}
              </span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image src={ColorIcon} alt={"ColorIcon"} width={18} height={18} />
              <span className="text-gray-700 text-sm">{trans("Painting")}</span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image src={GameIcon} alt={"GameIcon"} width={18} height={18} />
              <span className="text-gray-700 text-sm">{trans("Gaming")}</span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image src={DanceIcon} alt={"DanceIcon"} width={18} height={18} />
              <span className="text-gray-700 text-sm">{trans("Dancing")}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Traveling Style")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">{trans("Family")}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Smoke")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">
                {trans("No, I don’t")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Education level")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">
                {trans("Associate Degree")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Drink")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">
                {trans("Once a month")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">diet</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">
                {trans("I’m vegan")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Religion")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">
                {trans("I am not religious")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <div className="w-full flex flex-wrap font-medium items-center justify-between p-2">
            <strong>{trans("Explore Interests")}</strong>
            <Link className="text-blue-500 text-sm" href="#">
              {trans("more")}
            </Link>
          </div>
          <div className="w-full p-2 rounded-xl flex flex-wrap  bg-white shadow-sm">
            <Link
              href={"/app/%5Blocale%5D/profile/my-trips/create"}
              passHref
              prefetch={true}
              className="w-full flex justify-between items-stretch"
            >
              <div className="w-3/4 overflow-hidden">
                <div className="flex w-full gap-2">
                  <figure className="flex w-[50px] rounded-full h-[50px] items-center justify-center">
                    <Image
                      src={TurkeyFlag}
                      alt={"turkey-icon"}
                      width={30}
                      height={30}
                    />
                  </figure>
                  <div className={"w-2/3 flex flex-wrap truncate items-center"}>
                    <div className="font-bold">Istanbul</div>
                    <div className="w-full text-[12px] text-gray-500 font-bold">
                      Jul 21 - jul 27
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex flex-wrap items-center justify-end">
                <button className="p-2 rounded-lg hover:bg-gray-50 duration-100">
                  <Image
                    src={ArrowLeftIcon}
                    alt={"arrow-left-icon"}
                    className="rotate-180"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Interests")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image
                src={InstagramDisableIcon}
                alt={"InstagramDisableIcon"}
                width={18}
                height={18}
              />
              <span className="text-gray-500 text-sm">
                {trans("Instagram")}
              </span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <Image
                src={TikTokDisableIcon}
                alt={"TikTokDisableIcon"}
                width={18}
                height={18}
              />
              <span className="text-gray-500 text-sm">{trans("Tik tok")}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Languages")}</h4>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">{trans("French")}</span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">{trans("Persian")}</span>
            </div>
            <div className="flex items-center justify-center border rounded-xl max-w-fit p-2 py-3 gap-2">
              <span className="text-gray-700 text-sm">{trans("English")}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <h4 className="w-full font-bold py-2">{trans("Travel Stats")}</h4>
          <figure className="w-full flex flex-wrap">
            <ReactWorldMap />
            <figcaption className="w-full flex flex-wrap items-center justify-between py-2">
              <div className="text-gray-600 text-sm gap-1 flex items-center ">
                <span className="font-bold text-gray-800 text-lg">0</span>
                {trans("Countries")}
              </div>
              <div className="text-gray-600 text-sm gap-1 flex items-center ">
                <span className="font-bold text-gray-800 text-lg">0%</span>
                {trans("World")}
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="w-full flex flex-wrap px-4 py-2">
          <div className="w-full flex flex-wrap py-3 font-medium items-center justify-between ">
            <strong>{trans("Explore Interests")}</strong>
            <Link className="text-blue-500 text-sm" href="#">
              {trans("more")}
            </Link>
          </div>
          <div className="w-full rounded-xl flex flex-wrap  bg-white ">
            <article className="w-full bg-white flex flex-wrap rounded-xl  ">
              <figure className="w-2/6 ">
                <Image
                  src={ConcertImage}
                  alt={"concertImage"}
                  className="rounded-xl"
                  width={100}
                  height={100}
                />
              </figure>
              <div className="w-4/6 flex flex-wrap content-between justify-start py-2 ps-2 ">
                <h4 className="w-full flex-wrap font-bold">
                  Istanbul - Tatlis Concert
                </h4>
                <figure className="w-full flex gap-1 items-center">
                  <Image
                    src={CalenderIcon}
                    alt={"CalenderIcon"}
                    height={18}
                    width={18}
                  />
                  <figcaption className="font-medium text-gray-400 text-[10px]">
                    Sep 17 - Sep 28
                  </figcaption>
                </figure>
                <figure className="w-full flex gap-1 items-center">
                  <Image
                    src={PersonIcon}
                    alt={"PersonIcon"}
                    height={18}
                    width={18}
                  />
                  <figcaption className="font-medium text-gray-400 text-[10px]">
                    15 {trans("Follower Joined")}
                  </figcaption>
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Page;
