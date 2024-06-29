"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [loading,setLoading] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch =async (e:React.FormEvent)=>{
    setLoading(true)
    e.preventDefault();
    const randomName = await fetch("https://random-word-api.herokuapp.com/word").then(res=>res.json()).then(data=>data[0])
    if(!randomName) return ;
    router.push(`/search/web?searchTerm=${randomName}`);
    setLoading(false)
  }
  return (
    <>
      <form
        className="flex mt-5 py-3 px-5 w-full border border-gray-200 max-w-[90%] rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl items-center"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow outline-none "
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 mt-8">
        <button
          className="text-gray-800 bg-[#f8f9fa] rounded-md text-sm hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow w-36 h-10"
          onClick={handleSubmit}
          disabled={loading}
        >
          Google Search
        </button>
        <button className="text-gray-800 bg-[#f8f9fa] rounded-md text-sm hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow w-36 h-10
        disabled:opacity-80 disabled:shadow-sm disabled:cursor-not-allowed"
        onClick={randomSearch}
        disabled={loading}
        >
         {loading?"loading...":"I am Feeling Lucky"} 
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
