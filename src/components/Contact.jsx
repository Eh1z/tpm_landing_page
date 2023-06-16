import React from 'react'
import { images } from "../assets";

const Contact = () => {
  return (
    <div className=' contact flex flex-col items-center justify-center w-full py-16 xl:py-32'>
      <h1 className='head_text font-russo text_gradient pt-16 pb-5'>Join Us</h1>
      <p className=' px-10 font-semibold font-outfit text-lg xl:text-xl w-full xl:w-[40%] text-center pb-10'>We have a fast growing community on Telegram,  join our channel below for more info and faster updates on the state of the project.  </p>
      
     <a href=''><div className='flex flex-col items-center justify-center hover:scale-110 transition-all duration-700 animate-pulse cursor-pointer'>
        <img className=' w-10 xl:w-16 my-2 translate-x-[-5px]' src={images.telegram} alt="telegram" />
        <span className='font-russo text-lg xl:text-xl text_gradient'>Telegram</span>
      </div></a>
    </div>
  )
}

export default Contact