"use client";
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const SearchBox = () => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const [term,setTerm] = useState(searchTerm||"");
    const router = useRouter();
    const handleSubmit = (e:React.FormEvent)=>{
            e.preventDefault();
            if(!term.trim()) return;
            router.push(`/search/web?searchTerm=${term}`)
    }
  return (
    <form className='flex items-center border border-gray-200 shadow-lg rounded-full px-6 py-2 flex-grow max-w-2xl ml-10 mr-5' onSubmit={handleSubmit}>
        <input type="text" className='w-full focus:outline-none' value={term} onChange={(e)=>setTerm(e.target.value)}/>
        <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>setTerm("")}/>
        <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-gray-300 mr-3 pl-4'/>
        <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/>
    </form>
  )
}

export default SearchBox