import React from 'react'
import { JobState } from '../../context/JobProvider'
import { data } from '../../data/data';
import Navbar from '../Navbar';

const SpecificCompany = () => {
    const {company} = JobState();
    const filterData = data.filter((data)=>{
        return data.Cname === company.Cname;
    })
    console.log(filterData);
  return (
    <div>
        <Navbar/>
      <div className='py-24 px-[5%]'>
        <div className='max-w-[960px] m-auto'>
        <header className='flex flex-col items-center'>
            <img className='w-20 h-20 p-[18px] border-[1px] border-slate-200' src={company.image} alt={company.Cname} />
            <div className='text-center'>
            <h1 className='text-5xl font-bold mt-9'>{company.Cname}</h1>
            <p className='max-w-[540px] mt-5 text-[22px] text-slate-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt vitae aperiam!</p>
            </div>
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16'>
        {filterData.map((item) => (
        <div key={item.id} className='bg-white border-[2px] border-slate-200' >
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
    </div>
  )
}

export default SpecificCompany
