import React from 'react'
import { images } from "../assets";

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full py-32'>
      <h1 className='head_text font-russo text_gradient pt-16 pb-5'>Join Us</h1>
      <p className=' font-medium font-outfit text-xl w-[40%] text-center pb-10'>We have a fast growing community on Telegram,  join our channel below for more info and faster updates on the state of the project.  </p>
      
      <div className='flex flex-col items-center justify-center hover:scale-110 transition-all duration-700 animate-pulse'>
        <img className='w-16 my-2 translate-x-[-5px]' src={images.telegram} alt="telegram" />
        <span className='font-russo text-xl text_gradient'>Telegram</span>
      </div>
    </div>
  )
}

export default Contact