import React from 'react';
import Image from "next/image";
import SearchIcon from "@/public/icons/search-icon.svg";

function SearchBox({trans}) {
    return (
        <form className="w-full relative flex-wrap my-5 px-6">
            <input
                className="w-full h-[42px] ps-7 rounded-xl bg-white border-none outline-none placeholder:text-gray-400"
                placeholder={trans("search")}
            />
            <Image src={SearchIcon} alt={"search"} className="absolute top-1/2 -translate-y-1/2 left-8" width={12}
                   height={12}/>
        </form>

    );
}

export default SearchBox;