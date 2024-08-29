import React, { useEffect, useRef } from 'react'
import { data } from '../data/data'
import { JobState } from '../context/JobProvider'
import { Link, useNavigate } from 'react-router-dom'
import { useInView, useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion';

const Jobs = () => {
  const {setJob} = JobState()

  const navigate = useNavigate();

  const slicedData = data.slice(0, 6)
  const ref = useRef(null) 
  const inInView = useInView(ref,{
    margin: "0px 100px -50px 0px"
  })
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset:["0 1", "1.33 1"]
  // })
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const toJob = (item) => {
    localStorage.setItem('job', JSON.stringify(item)); // Save to localStorage
    navigate("/job")
  }
  return (
    <div className='bg-slate-50'>
      <div className='px-[5%] py-12'>
       <header ref={ref}>
        <motion.div animate={{x: inInView ? 0 : -1000}} transition={{duration:0.7, type:'spring', stiffness:60}} className='max-w-[570px]'>
          <h1 className='text-5xl font-bold mt-9'>
            Explore latest jobs openings
          </h1>
          <p className='text-xl text-slate-600 py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore eius quisquam aliquam, hakuna matata.</p>
        </motion.div>
        <div>

        </div>
       </header>

       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {slicedData.map((item) => (
        <div key={item.id} className='bg-white border-[2px] border-slate-200' onClick={() => toJob(item)}>
          <div className='px-6 py-6 h-full'>
            <div className='flex gap-3 items-center'>
             <img className='w-14 p-2 border-[2px] border-slate-200' src={item.image} alt="" />
             <div>
                <h1 className='font-semibold text-lg'>{item.Cname}</h1>
                <p className='text-slate-600'>{item.date}</p>
             </div>
            </div>
            <div className='mt-4'>
             <h1 className='font-bold text-xl'>{item.role}</h1>
             <div className='flex my-5 gap-3'>
                <p className='text-indigo-700 bg-indigo-50 px-3 py-1'>{item.neiche}</p>
                <p className='text-amber-600 bg-amber-100 px-3 py-1'>{item.time}</p>
             </div>
             <div className='flex gap-3'>
                <div className='flex items-center gap-2'>
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2585b442b4_Location%20Icon.svg" className='w-6' alt="" />
                    <p className='font-medium text-slate-600'>{item.location}</p>
                </div>
                <div className='flex items-center'>
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b73d8b44295_Salary%20Icon.svg" className='w-6' alt="" />
                    <p className='font-medium text-slate-600'>{item.salary}</p>
                </div>
             </div>
            </div>
          </div>
        </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default Jobs
