import React from 'react'
import { JobState } from '../../context/JobProvider'
import Navbar from '../Navbar'

const Job = () => {
  const savedjob = localStorage.getItem("job");
  const job = JSON.parse(savedjob)
  return (
    <>
    <Navbar/>
    <div className='px-[5%] py-28'>
      <div className='w-full flex flex-col lg:flex-row gap-10'>
        <div className='w-full lg:w-[70%] border-[1px] border-slate-100 px-[5%] py-10'>

        <div className='border-b-[0.75px] border-slate-100'>
          <div className='flex gap-8 items-center'>
             <img className='w-20 h-20 p-[18px] border-[1px] border-slate-200' src={job.image} alt={job.Cname} />
             <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-3xl'>{job.Cname}</h1>
                <p className='text-slate-600 font-medium text-lg'>{job.date}</p>
             </div>
          </div>
             <h1 className='text-4xl font-bold mt-9 mb-8'>{job.role}</h1>
          <div className='flex gap-4 mb-12'>
                <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 18.6749L15.7125 14.9624C16.4467 14.2282 16.9466 13.2927 17.1492 12.2743C17.3517 11.256 17.2477 10.2004 16.8503 9.24111C16.4529 8.28183 15.78 7.46192 14.9167 6.88507C14.0533 6.30821 13.0383 6.00032 12 6.00032C10.9617 6.00032 9.94666 6.30821 9.08332 6.88507C8.21997 7.46192 7.54706 8.28183 7.14969 9.24111C6.75231 10.2004 6.64831 11.256 6.85084 12.2743C7.05337 13.2927 7.55333 14.2282 8.2875 14.9624L12 18.6749ZM12 20.7959L7.227 16.0229C6.28301 15.0789 5.64014 13.8762 5.3797 12.5668C5.11925 11.2575 5.25293 9.90026 5.76382 8.66687C6.27472 7.43347 7.13988 6.37927 8.24991 5.63757C9.35994 4.89588 10.665 4.5 12 4.5C13.335 4.5 14.6401 4.89588 15.7501 5.63757C16.8601 6.37927 17.7253 7.43347 18.2362 8.66687C18.7471 9.90026 18.8808 11.2575 18.6203 12.5668C18.3599 13.8762 17.717 15.0789 16.773 16.0229L12 20.7959ZM12 12.7499C12.3978 12.7499 12.7794 12.5919 13.0607 12.3106C13.342 12.0293 13.5 11.6478 13.5 11.2499C13.5 10.8521 13.342 10.4706 13.0607 10.1893C12.7794 9.90798 12.3978 9.74994 12 9.74994C11.6022 9.74994 11.2206 9.90798 10.9393 10.1893C10.658 10.4706 10.5 10.8521 10.5 11.2499C10.5 11.6478 10.658 12.0293 10.9393 12.3106C11.2206 12.5919 11.6022 12.7499 12 12.7499ZM12 14.2499C11.2044 14.2499 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.2499C9 10.4543 9.31607 9.69123 9.87868 9.12862C10.4413 8.56601 11.2044 8.24994 12 8.24994C12.7957 8.24994 13.5587 8.56601 14.1213 9.12862C14.6839 9.69123 15 10.4543 15 11.2499C15 12.0456 14.6839 12.8087 14.1213 13.3713C13.5587 13.9339 12.7957 14.2499 12 14.2499Z" fill="#4640DE"></path>
                </svg>                   
                <p className='font-medium '>{job.location}</p>
                </div>
                <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9997 19.6389C7.78077 19.6389 4.36084 16.2189 4.36084 12C4.36084 7.78101 7.78077 4.36108 11.9997 4.36108C16.2187 4.36108 19.6386 7.78101 19.6386 12C19.6386 16.2189 16.2187 19.6389 11.9997 19.6389ZM11.9997 18.1111C13.6205 18.1111 15.1749 17.4672 16.3209 16.3212C17.467 15.1751 18.1108 13.6207 18.1108 12C18.1108 10.3792 17.467 8.82482 16.3209 7.67877C15.1749 6.53271 13.6205 5.88886 11.9997 5.88886C10.379 5.88886 8.82458 6.53271 7.67852 7.67877C6.53247 8.82482 5.88862 10.3792 5.88862 12C5.88862 13.6207 6.53247 15.1751 7.67852 16.3212C8.82458 17.4672 10.379 18.1111 11.9997 18.1111ZM9.32612 13.5278H13.5275C13.6288 13.5278 13.726 13.4875 13.7976 13.4159C13.8692 13.3443 13.9095 13.2471 13.9095 13.1458C13.9095 13.0445 13.8692 12.9474 13.7976 12.8757C13.726 12.8041 13.6288 12.7639 13.5275 12.7639H10.472C9.96546 12.7639 9.47972 12.5627 9.12157 12.2045C8.76343 11.8464 8.56223 11.3606 8.56223 10.8541C8.56223 10.3477 8.76343 9.86191 9.12157 9.50376C9.47972 9.14562 9.96546 8.94442 10.472 8.94442H11.2358V7.41664H12.7636V8.94442H14.6733V10.4722H10.472C10.3707 10.4722 10.2735 10.5124 10.2019 10.5841C10.1302 10.6557 10.09 10.7528 10.09 10.8541C10.09 10.9554 10.1302 11.0526 10.2019 11.1242C10.2735 11.1958 10.3707 11.2361 10.472 11.2361H13.5275C14.034 11.2361 14.5197 11.4373 14.8779 11.7954C15.236 12.1536 15.4372 12.6393 15.4372 13.1458C15.4372 13.6523 15.236 14.138 14.8779 14.4962C14.5197 14.8543 14.034 15.0555 13.5275 15.0555H12.7636V16.5833H11.2358V15.0555H9.32612V13.5278Z" fill="#3EBB7F"></path>
                </svg>                    
                <p className='font-medium '>{job.salary}</p>
                </div>
             </div>
        </div>

        <div className='py-16'>
          <div className='border-b-[0.75px] border-slate-100'>
            <h1 className='text-3xl font-bold mb-4'>Minimum Qualifications</h1>
            <div className='pl-5 mb-4 text-[16px] md:text-[22px]'>
              <li className='text-slate-700 leading-10'>4+ years of experience in webflow development</li>
              <li className='text-slate-800 leading-10'>Exceptional visual and UI design skills, with a deep knowledge of best practice</li>
              <li className='text-slate-800 leading-10'>Lorem ipsum dolor sit amet.</li>
              <li className='text-slate-800 leading-10'>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li className='text-slate-800 leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </div>

            <h1 className='text-3xl font-bold mt-8 mb-4'>Preffered Qualification</h1>
            <div className='pl-5 mb-4 text-[16px] md:text-[22px]'>
              <li className='text-slate-800 leading-10'>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li className='text-slate-800 leading-10'>Exceptional visual and UI design skills, with a deep knowledge of best practice</li>
              <li className='text-slate-800 leading-10'>Lorem ipsum dolor sit amet.</li>
              <li className='text-slate-800 leading-10'>Comfortable running workshops and gathering insight from the team</li>
            </div>
            <h1 className='text-3xl font-bold mt-8 mb-4'>About the job</h1>
            <div className='mb-4'>
              <p className='text-slate-800 text-[16px] md:text-[22px] leading-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore facilis animi, vero quas temporibus illum in corrupti cumque ex sit ducimus est, perspiciatis sint deserunt illo, eligendi explicabo. Nobis non consequuntur nostrum doloremque porro distinctio obcaecati libero deleniti officiis animi cupiditate ea dolor ratione inventore, alias reiciendis iste nihil illum in corrupti cumque ex sit ducimus est.</p>
            </div>
            <div className='mb-14'>
              <p className='text-slate-800 text-[16px] md:text-[22px] leading-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque architecto nemo, aut laudantium eum porro eveniet ratione fuga iste tenetur, possimus sint? Quia dolores, rerum est reprehenderit cupiditate tempore! Repellendus, totam, vero illum ab deleniti, animi nulla atque aliquid temporibus amet modi fugit nihil tenetur!</p>
            </div>
          </div>
          <div>
            <h1 className='text-3xl font-bold mt-8 mb-4'>Working at <span className='text-indigo-700'>{job.Cname}</span></h1>
            <p className='text-slate-800 text-[16px] md:text-[22px] leading-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quidem debitis ut, hic delectus reprehenderit quo doloribus nesciunt eligendi praesentium rerum, ducimus similique! Magni reiciendis maiores eius suscipit est inventore? Dolore ducimus repudiandae voluptatem quisquam asperiores sit dicta quam in?</p>
          </div>
        </div>

        </div>
        <div className='w-full lg:w-[30%] h-fit sticky'>
            <h1 className='text-3xl font-bold bg-indigo-700 text-white py-4 text-center mb-8'>Apply for Job</h1>
          <div className='px-[5%] py-[5%] border-[1px] border-slate-100'>
            <form>
            <h1 className='text-3xl font-bold pt-6'>1. Personal Detail</h1>
            <p className='text-slate-600 font-medium py-3'>We'll need this to contact you.</p>
            <input type="text" placeholder='First name' className='w-full p-2 mb-4 border-[1px] border-slate-100'/>
            <input type="text" placeholder='Last name' className='w-full p-2 mb-4 border-[1px] border-slate-100'/>
            <input type="text" placeholder='Your Email' className='w-full p-2 mb-4 border-[1px] border-slate-100'/>

            <h1 className='text-3xl font-bold pt-6'>2. Profile</h1>
            <p className='text-slate-600 font-medium py-3'>Why you want to work with us.</p>
            <textarea placeholder='Tell us a little about you' className='w-full p-2 mb-4 border-[1px] border-slate-100'></textarea>
            <textarea placeholder='what makes us right for you?' className='w-full p-2 mb-4 border-[1px] border-slate-100'></textarea>

            <h1 className='text-3xl font-bold pt-6'>3. Submit Application</h1>
            <p className='text-slate-600 font-medium py-3'>In order to contact you with future jobs that you may be interested in,we need to store your personal data.</p>
            <p className='py-4 text-slate-600 font-medium'>You can view our GDPR / Privacy notice here.</p>

            <button className='w-full bg-indigo-700 text-white  text-center py-2 font-medium'>Apply</button>
            
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Job
