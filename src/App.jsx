import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.scss'

import { Navbar, Home, About, Contact, Tokenomics, Floors } from './components'


const App = () => {
  return (
    <>
    <div className=' flex-col w-full h-auto bg-[#00000E] text-white'>
      <Navbar />
      <Home />
      <About />
      <Floors />
      <Contact />
      <Tokenomics />
    </div>
    </>
  )
}

export default App
