import Link from "next/link"
import React from "react"
import { TbGridDots } from "react-icons/tb"

const HomePageHeader = () => {
  return (
    <header className="flex justify-end p-5">
      <div className="flex gap-5 items-center">
        <Link href="https://mail.google.com/mail" className="hover:underline">
        Mail
        </Link>
        <Link href="https://image.google.com"  className="hover:underline">
        Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-2xl"/>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
      </div>
    </header>
  )
}

export default HomePageHeader