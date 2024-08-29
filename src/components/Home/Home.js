import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styl.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      <div className='px-[5%] flex flex-col md:flex-row py-24 gap-8'>
        <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:0.7, type:'spring', stiffness:80}} className='flex flex-col max-w-[540px]'>
            <div className='flex items-center bg-slate-50 px-2 py-2 gap-2 w-fit'>
             <div className='text-indigo-600 bg-white text-xs font-medium px-2 py-1'>NEW</div>
             <p className='text-sm'>Stay connected to get upcoming jobs</p>
            </div>
            <h1 className='text-[4rem] font-bold mt-9 tracking-[-5px] leading-[1]'>Find the most exciting jobs in tech</h1>
        </motion.div>

        <motion.div initial={{x:1000}} animate={{x:0}} transition={{duration:0.7, type:'spring', stiffness:80}} className='w-full'>
        <div className='flex justify-center'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <h1 className='text-5xl font-bold'>2500+</h1>
            <h1 className='text-4xl font-bold'>Jobs</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <h1 className='text-5xl font-bold'>600+</h1>
            <h1 className='text-4xl font-bold'>Companies</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide><h1 className='text-4xl font-bold'>Top Rated</h1></SwiperSlide>
      </Swiper>        

        </div>
      </motion.div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 justify-between px-[5%] py-12'>
        <div className='flex justify-center items-center p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b8f23b4428c_Grey%20Logo%20Large%20(2).svg" alt="" />
        </div>
        <div className='flex justify-center items-center p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2d66b4428f_Grey%20Logo%20Large%20(5).svg" alt="" />
        </div> 
        <div className='flex justify-center items-center p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b464eb4428d_Grey%20Logo%20Large%20(4).svg" alt="" />
        </div>
        <div className='flex justify-center items-cente p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b1160b4428a_Grey%20Logo%20Large%20(1).svg" alt="" />
        </div>
        <div className='flex justify-center items-center p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b0585b4428b_Grey%20Logo%20Large%20(3).svg" alt="" />
        </div>
        <div className='flex justify-center items-center p-2'>
        <img className='w-[140px]' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bb6c6b4428e_Grey%20Logo%20Large%20(6).svg" alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
