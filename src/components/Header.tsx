'use client'
import { MagnifyingGlassIcon } from "@/icons/Icons"
import Image from "next/image"
import Avatar from "react-avatar"

export default function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
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
    </header>
  )
}
