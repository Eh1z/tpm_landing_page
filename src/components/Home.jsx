import React from 'react'
import { images } from '../assets'

const Home = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[80vh] '>

      <div className='flex-col flex items-center z-10'>
      <img  className='absolute w-full translate-y-[-30px]' src={images.wave} alt="wave" />
      <div className='head_text font-russo text_gradient'>The Promised Moon Token is Here</div>
      <div className='sub-text font-outfit'>We are here to show the power of holding and selling small.</div>
      <button className='btn font-russo'>WHAT'S NEXT</button>
      </div>

    </div>
  )
}

export default Home