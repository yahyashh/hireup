import React, { useRef } from 'react'
import next from "../../assets/next-arrows.svg"
import prev from "../../assets/previous-back.svg"
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { data } from '../../data/data';
import { JobState } from '../../context/JobProvider';
import { useNavigate } from 'react-router-dom';
import { useInView, motion } from 'framer-motion';


const Company = () => {
  const {setCompany} = JobState();
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ref = useRef(null) 
  const inInView = useInView(ref,{
  margin: "0px 100px -50px 0px"
})

  const toCompany = (name) => {
    setCompany(name)
    navigate("/company")
  }

  return (
    <div>
      <div>

        <header ref={ref} className='px-[5%] flex justify-between pt-20'>
         <motion.div animate={{x: inInView ? 0 : -1000}} transition={{duration:0.7, type:'spring', stiffness:60}} className='max-w-[570px]'>
          <h1 className='text-5xl font-bold'>Work With Exciting Companies</h1>
          <p className='font-normal text-base text-slate-600 pt-5'>Work with elite companies with more than 5000+ jobs.
          </p>
         </motion.div>
        </header>

        <div className='py-16'>

      <div className="slider-container px-[5%] ">
      <Slider {...settings}>
      {data.map((item, i) => (
        <div key={i} className='bg-white border-[2px] border-slate-200' onClick={() => toCompany(item)}>
          <div className='px-10 py-10 h-full'>
            <div className='flex gap-3 items-center'>
             <img className='w-14 p-2 border-[2px] border-slate-200' src={item.image} alt="" />
             <div>
                <h1 className='font-bold text-xl'>{item.Cname}</h1>
             </div>
            </div>
            <div className='mt-4'>
             <div className='flex my-5 gap-3'>
                <p className='text-lg md:xl leading-8 text-slate-600'>Lorem ipsum dolor sit elit amet consectetur adipisicing. Ut, repellat mollis gravida.</p>
             </div>
             <div className=''>
             <p className='text-green-800 w-fit font-medium bg-green-50 text-lg px-3 py-1'>100 Employee</p>
             </div>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>

        </div>
      </div>
    </div>
  )
}

export default Company
