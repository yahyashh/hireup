import React, { useState } from 'react'
import data from '../data/data'
import menu from "../assets/menu.png"
import { useScroll, motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='py-5 px-[5%] border-b-2 border-slate-300'>
      <div className='flex justify-between items-center'>
        <img src="https://assets.website-files.com/63337525695d8ba70ab44222/6344ecd40ba06e3b4929e587_HireUp%20Logo.svg" alt="logo" />
        {toggle && (
        <nav className='flex md:static md:gap-9 md:flex-row md:w-fit md:pb-0 absolute left-0 top-20 px-[5%] pb-3 w-full bg-white flex-col text-left'>
            <motion.a whileHover={{scale:1.2,}} href="" className='hover:text-indigo-600 font-medium py-3'>Home</motion.a>
            <motion.a whileHover={{scale:1.2,}} href="" className='hover:text-indigo-600 font-medium py-3'>Jobs</motion.a>
            <motion.a whileHover={{scale:1.2,}} href="" className='hover:text-indigo-600 font-medium py-3'>Companies</motion.a>
            <motion.a whileHover={{scale:1.2,}} href="" className='hover:text-indigo-600 font-medium py-3'>FAQs</motion.a>
            <button className='flex md:hidden text-white bg-indigo-600 w-fit px-3 py-2 font-medium'>Post Job</button>
        </nav>
        )}
        <div className=''>
            <button className='hidden md:flex text-white bg-indigo-600 px-3 py-3 font-medium'>Post Job</button>
            <img className='w-10 flex md:hidden' src={menu} alt=""
            onClick={()=>setToggle(!toggle)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
