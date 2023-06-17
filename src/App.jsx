import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.scss'
import { images } from './assets'

import { Navbar, Home, About, Contact, Tokenomics, Floors } from './components'


const App = () => {
  return (
    <>
    <div className=' flex-col w-full h-auto bg-[#00000E] text-white overflow-hidden'>
      
      <Navbar />

      <img  className='absolute blur-3xl top-[200px] left-0' src={images.pblur} alt="purple blur" />
      <img  className='absolute blur-3xl top-[120px] right-0' src={images.yblur} alt="yellow blur" />
      <img  className='absolute blur-3xl bottom-[-500px] right-0' src={images.gblur} alt="" />

      <Home />
      <About />
      <Floors />


      <img  className='absolute blur-3xl bottom-[-1800px] right-0' src={images.yblur} alt="yellow blur" />
      <img  className='absolute blur-3xl bottom-[-1500px] left-0' src={images.gblur} alt="" />
      <Tokenomics />

      <img  className='absolute blur-3xl top-[3000px] left-0 hidden 2xl:block' src={images.bblur} alt="blue blur" />
      <img  className='absolute blur-3xl bottom-[-3900px] right-0 hidden 2xl:block' src={images.yblur} alt="yellow blur" />
      <img  className='absolute blur-3xl bottom-[-4600px] left-0 hidden 2xl:block' src={images.gblur} alt="" />

      <Contact />
      <img  className='absolute blur-3xl top-[5200px] right-0 hidden 2xl:block' src={images.bbblur} alt="blue blur" />
    </div>
    </>
  )
}

export default App
