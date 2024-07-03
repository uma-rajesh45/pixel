"use client";
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { RiGhostLine } from 'react-icons/ri';


const Pagination = () => {
    const searchParams = useSearchParams()
    const path = usePathname()
    const searchTerm = searchParams.get("searchTerm")
    const searchIndex = parseInt(searchParams.get("start")||"1");
  return (
    <div className='flex justify-start sm:justify-between gap-4 text-violet-600 sm:px-20'>
      {searchIndex>10&&(
        <Link href={`${path}?searchTerm=${searchTerm}&start=${searchIndex-10}`} className='flex text-lg items-center'>
        <BiLeftArrowAlt />
         <p>previous</p>
        </Link>
      )}
      {searchIndex<=90&&(
       <Link href={`${path}?searchTerm=${searchTerm}&start=${searchIndex+10}`} className='flex text-lg items-center'>
         <p> next</p>
        <BiRightArrowAlt />
     
      </Link>
      )}
    </div>
  )
}

export default Pagination
