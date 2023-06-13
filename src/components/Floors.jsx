import React from 'react'
import { images } from "../assets";

const Floors = () => {
  return (
    <div className="floors">
        <div className='mile_stone'>
            <div className='mile_text'>
                <h2 className='text_gradient font-russo text-4xl py-5'>THE $50K FLOOR</h2>
                <p className='align-left w-[60%] leading-8 font-outfit font-semibold text-2xl'>After we reach $50k market cap, the sells will be opened and we will use the anti-jeet system to avoid huge dumps.<br/><br/>

If we dip below $50k again sells will be disabled and a buyback will be done.<br/><br/>

Once back above $50k sells will opened again. This is the floor system.
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
