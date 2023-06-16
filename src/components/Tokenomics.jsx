import React from 'react'
import { Table } from './table/'


const Tokenomics = () => {
  return (
    <div className='token align-left'>
      <h1 className='text_gradient section_text pb-20'>Tokenomics</h1>

      <div className='w-full '>
        <h3 className='font-russo text-lg xl:text-3xl py-2'>Total Supply: <span className='text_gradient'>1,000,000,000 units</span></h3>
        <p className=' w-full leading-8 font-russo font-medium text-sm xl:text-2xl'>10% to pay for services.</p>
        <h3 className='font-russo text-lg xl:text-3xl py-5'>Max. Sell: <span className='text_gradient'>1,000,000 units (0.1%)</span></h3>
      </div>
      
        <Table />

      <div className='buy_back'>
        <h2 className='text_gradient text-center xl:text-left section_text py-5'>BUY BACKS</h2>
        <p className='text-center xl:text-left w-full xl:w-[80%] xl:leading-8 font-outfit font-semibold text- xl:text-2xl'>
        Buybacks will be done once we dip below the floor. Every time a buyback is done we use 40% of the buyback pot while 60% will be saved up.<br/><br/>

        Automatic small buybacks will be implemented when contract sold for rewards to counter the sells, the rewards would be given in:<br/><br/>
        
        <span className='text-sm text-center xl:text-left xl:text-2xl text_gradient'>0x17Bd2E09fA4585c15749F40bb32a6e3dB58522bA</span><br/><br/>

        Developer tax will be split 0.5%, for me and 0.5% for you.
        50% of the tokens bought by the buyback wallet will be burned, 50% will be saved up for promos and more.
        </p>
      </div>
    </div>
  )
}

export default Tokenomics