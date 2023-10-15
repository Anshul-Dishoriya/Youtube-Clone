import React, { useContext, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";



const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { loading, mobileMenu, setMobileMenu } = useContext(Context)
  const nevigate = useNavigate()

  const searchQueryHandler = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0) {
      nevigate(`/searchResult/${searchQuery}`)
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0]

  return (
    <div className='sticky top-0 z-20 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {/* Conditional renderting starts */}
        {pageName !== 'video' && (
          <div onClick={mobileMenuToggle} className={`flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] transition-transform duration-300 ${mobileMenu ? 'transform rotate-90' : 'transform rotate-0'}`}>
            {mobileMenu ? (
              <CgClose className='text-white text-xl' />
            ) : (
              <SlMenu className='text-white text-xl' />
            )}
          </div>
        )}
        {/* Conditional renderting ends */}
        <Link to='/' className='flex h-5 items-center'>
          <img className="h-full hidden dark:md:block" src={ytLogo} alt="Youtube" />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button onClick={() => searchQueryHandler("searchButton")} className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030]  rounded-r-3xl bg-white/[.1]'>
          <IoIosSearch className="text-white text-3xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[.8]'>
            <RiVideoAddLine className='text-white text-xl cursor-pointer' />
          </div>
          <div className='flex items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[.8]'>
            <FiBell className='text-white text-xl cursor-pointer' />
          </div>
          <div className='flex  items-center h-8 w-8 rounded-full overflow-hidden md:ml-4'>
            <img src='https://api.multiavatar.com/stefan.svg' className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header