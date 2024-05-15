'use client'
import { MagnifyingGlassIcon, UserCircleIcon } from "@/icons/Icons"
import Image from "next/image"
import Avatar from "react-avatar"

export default function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">

        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50"/>

        <Image 
          src='/Trello_logo.png'
          alt='Trello logo'
          width={300}
          height={100}
          priority
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon />
            <input type="text" placeholder="Search" className="flex-1 outline-none"/>
            <button type="submit" hidden>Search</button>
          </form>
          
          <Avatar name='Jeifer Leon' round color="#0055D1" size="40"/>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light p-2 shadow-xl rounded-xl bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon />
          GPT is summarizing you task for the day...
        </p>
      </div>
    </header>
  )
}
