import React from 'react'

const ChooseUs = () => {
  return (
    <div className='px-[5%] py-16 md:py[100px]  '>
      <div className='max-w-[1140px] m-auto '>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-28'>
        <div>
         <img className='h-full w-full object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/6345158a36516a477226909d_Feature%20Image.webp" alt="" />
        </div>
        <div className=''>
          <div>
           <h3 className='text-indigo-700 font-medium'>WHY CHOOSE US</h3>
           <h1 className='text-[40px] font-bold leading-none mt-3'>Build a custom membership site with locked content.</h1>
           <p className='text-slate-700 text-[17px] py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo esse distinctio itaque molestiae dolorum reprehenderit eaque, atque voluptatibus in!</p>
          </div>
          <div className='flex flex-col gap-4'>
           <div className='flex gap-4 items-center p-4 bg-slate-100'>
            <img className='w-[60px] p-3 border-[1px] bg-white border-slate-300 ' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg" alt="" />
            <div>
                <h2 className='text-lg font-medium'>Add a feature point</h2>
                <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
           </div>
           <div className='flex gap-4 items-center p-4 bg-slate-100'>
            <img className='w-[60px] p-3 border-[1px] bg-white border-slate-300 ' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg" alt="" />
            <div>
                <h2 className='text-lg font-medium'>Add a feature point</h2>
                <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
           </div>
           <div className='flex gap-4 items-center p-4 bg-slate-100'>
            <img className='w-[60px] p-3 border-[1px] bg-white border-slate-300 ' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg" alt="" />
            <div>
                <h2 className='text-lg font-medium'>Add a feature point</h2>
                <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
           </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default ChooseUs
