"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';

const SearchHeaderOptions = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get("searchTerm");
    const path = usePathname();
    const selectTab = (tab:string)=>{
        router.push(`/search/${tab==="Images"?'image':'web'}?searchTerm=${searchTerm}`)
    }
  return (
    <div className='flex sm:pl-[14%] justify-start max-sm:!pl-3 lg:justify-start lg:pl-52 text-gray-700 text-md w-full select-none gap-4 items-center'>
        <div onClick={()=>selectTab("All")} className={`flex gap-1 items-center active:text-blue-500 border-b-4 border-transparent cursor-pointer ${path==="/search/web"&&'!text-blue-600 !border-blue-600'}`}>
            <AiOutlineSearch/>
            <p>All</p>
        </div>
        <div onClick={()=>selectTab("Images")} className={`flex gap-1 items-center active:text-blue-500 border-b-4 border-transparent cursor-pointer ${path==="/search/image"&&'!text-blue-600 !border-blue-600'}`}>
            <AiOutlineCamera/>
            <p>Images</p>
        </div>
    </div>
  )
}

export default SearchHeaderOptions