import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.png";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between p-6 items-center ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Pixel search engine Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="flex-1 pt-2">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-3">
          <RiSettings3Line  className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
        </div>
        <button className="bg-blue-500 text-white px-0 md:px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2">Sign In</button>

      </div>
      <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;
