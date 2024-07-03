"use client";
import Link from 'next/link';
import React from 'react'

const Error = ({Error}:{Error:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen flex-col  items-center  text-2xl pt-10'>
      Something Went Wrong or check your internet connection once !
      <Link className='text-blue-500 text-xl' href="/">Try Again </Link>
    </div>
  )
}

export default Error
