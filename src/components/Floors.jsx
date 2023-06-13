import React from 'react'
import { images } from "../assets";

const Floors = () => {
  return (
    <div className="floors">
        <div className='mile_stone'>

            <div className='mile_text'>
                <h2 className='text_gradient font-russo text-4xl py-5'>THE $50K FLOOR</h2>
                  <p className='align-left w-[80%] leading-8 font-outfit font-medium text-2xl'>After we reach $50k market cap, the sells will be opened and we will use the anti-jeet system to avoid huge dumps.<br/><br/>
                    If we dip below $50k again sells will be disabled and a buyback will be done.<br/><br/>
                    Once back above $50k sells will opened again. This is the floor system.
                  </p>
            </div>

            <div className='mile-img'>
                <img src={images.mockup} alt="" />
            </div>
        </div>

        <div className='mile_stone'>

            <div className='mile-img pr-80'>
                <img src={images.mockup} alt="" />
            </div>

            <div className='mile_text'>
                <h2 className='text_gradient font-russo text-4xl py-5'>THE RISING FLOOR</h2>
                  <p className='align-left w-[80%] leading-8 font-outfit font-medium text-2xl'>
                  The floor will be rising once we get above $75k market cap and the floor will be 30% down from the all time high forever.<br/><br/>
                  Here it works the same if we go below the market cap which  represents the floor,  sells will be disabled.<br/><br/>
                  They will be enabled again once we go above that same market cap.
                  </p>
            </div>

        </div>

        <div className='mile_stone'>

            <div className='mile_text'>
                <h2 className='text_gradient font-russo text-4xl py-5'>THE ANTI-JEET SYSTEM</h2>
                  <p className='align-left w-[80%] leading-8 font-outfit font-medium text-2xl'>
                  Sells are allowed for every holder at 0.1% of the supply every 2 hours (on $50k market cap that will be $50 every hour and a maximum of $600 a day) .<br/><br/>
                  We do this to show everyone the power of holding and taking profits responsibly.<br/><br/>
                  This can moon faster than your mom on meth😎
                  </p>
            </div>

            <div className='mile-img'>
                <img src={images.mockup} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Floors
