import React from 'react'
import next from "../../assets/next-arrows.svg"
import prev from "../../assets/previous-back.svg"

const Testimonial = () => {
  return (
    <div className='bg-slate-50 py-[5%] px-[5%]'>
        <header className='flex justify-center'>
          <div className='flex items-center pb-24 flex-col gap-5 max-w-[470px]'>            
            <h2 className='text-indigo-700 text-lg font-medium tracking-[1px]'>TESTIMONIAL</h2>
            <h1 className='text-[40px] font-bold text-center leading-none'>See what user say about our job platform</h1>
          </div>
        </header>
        <div className='h-full max-w-[960px] m-auto'>

        <swiper-container style={
        { 
        "--swiper-navigation-color": "#443fde", 
        "--swiper-pagination-color": "#443fde"
        }}
         class="mySwiper" pagination="true" pagination-clickable="true" space-between="30"loop="true">
      <swiper-slide>
      <div className='w-full h-full pb-10 grid grid-rows-1 md:grid-cols-2 gap-x-16 gap-y-10'>
        <div className='flex flex-col max-w-[570px]'>
          <img className='w-24 h-24 p-3 bg-white border-[2px] border-slate-200' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b3fa3b4427d_Mail%20Chimp%20Icon.svg" alt="mokey" />
          <div className='my-20'>
            <h1 className='text-3xl font-medium text-slate-800'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</h1>
            <p className='font-normal text-xl text-slate-700 pt-6'><span className='text-indigo-700'>David Sinclair</span> - Senior Frontend Developer</p>
          </div>

        </div>

        <div className='w-full'>
          <img className='object-cover h-full w-full' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b405fb44260_Why%20Choose%20Us%20Image%20(2).jpg" alt="" />
        </div>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div className='w-full h-full pb-10 grid grid-rows-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col max-w-[570px]'>
          <img className='w-24 h-24 p-3 bg-white border-[2px] border-slate-200' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b3fa3b4427d_Mail%20Chimp%20Icon.svg" alt="mokey" />
          <div className='my-20'>
            <h1 className='text-3xl font-medium text-slate-800'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</h1>
            <p className='font-normal text-xl text-slate-700 pt-6'><span className='text-indigo-700'>David Sinclair</span> - Senior Frontend Developer</p>
          </div>

        </div>

        <div className='w-full'>
          <img className='object-cover h-full w-full' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b405fb44260_Why%20Choose%20Us%20Image%20(2).jpg" alt="" />
        </div>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div className='w-full h-full pb-10 grid grid-rows-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col max-w-[570px]'>
          <img className='w-24 h-24 p-3 bg-white border-[2px] border-slate-200' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b3fa3b4427d_Mail%20Chimp%20Icon.svg" alt="mokey" />
          <div className='my-20'>
            <h1 className='text-3xl font-medium text-slate-800'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</h1>
            <p className='font-normal text-xl text-slate-700 pt-6'><span className='text-indigo-700'>David Sinclair</span> - Senior Frontend Developer</p>
          </div>

        </div>

        <div className='w-full'>
          <img className='object-cover h-full w-full' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b405fb44260_Why%20Choose%20Us%20Image%20(2).jpg" alt="" />
        </div>
      </div>
      </swiper-slide>
      
      </swiper-container>
        </div>
    </div>
  )
}

export default Testimonial
