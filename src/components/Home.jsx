import React from 'react'
import { images } from '../assets'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[100vh] sm:h-[80vh] px-3 mt-20' id='home_nav'>

      <div className='flex-col flex items-center z-10'>
      <img  className='absolute w-full translate-y-[-30px]' src={images.wave} alt="wave" />
      <div className='head_text font-russo text_gradient'>The Promised Moon Token is Here</div>
      <div className='sub-text font-outfit'>We are here to show the power of holding and selling small.</div>
      <Link className='link_text a' to="about_nav"><button className='btn font-russo'>WHAT'S NEXT</button></Link>
      </div>

    </div>
  )
}

export default Home