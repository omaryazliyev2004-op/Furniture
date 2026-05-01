import React from 'react'

export default function Categories() {
  return (
    <section className='max-w-[1560px] pt-[60px] pb-[60px]  px-[120px]'>
      <h2 className='text-center font-[700] text-[32px] leading-[100%] text-[#333333] '>Browse The Range</h2>
      <p className='font-[400] text-[20px] text-[#666666] mt-[20px] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='flex justify-between items-center mt-[80px] '>
        <div>
          <img src="/images/dining.svg" alt="" />
          <p className='font-[600] mt-[30px] text-[24px] text-center text-[#333333] ' >Dining</p>
        </div>
        <div>
          <img src="/images/living.svg" alt="" />
          <p className='font-[600] mt-[30px] text-[24px] text-center text-[#333333] ' >Living</p>
        </div>
        <div>
          <img src="/images/bedroom.svg" alt="" />
          <p className='font-[600] mt-[30px] text-[24px] text-center text-[#333333] ' >Bedroom</p>
        </div>
      </div>
    </section>
  )
}
