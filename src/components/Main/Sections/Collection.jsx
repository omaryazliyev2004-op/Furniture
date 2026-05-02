import React from 'react'

export default function Collection() {
  return (
    <section className='w-full pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] px-[20px] md:px-[120px]'>
      <h2 className='text-center font-[700] text-[24px] md:text-[32px] leading-[100%] text-[#333333]'>
        Inspiration Collection
      </h2>
      <p className='font-[400] text-[16px] md:text-[20px] text-[#666666] mt-[12px] md:mt-[20px] text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className='hidden md:flex justify-between mt-[80px]'>
        <img src="/images/img1.svg" alt="collection" className='w-[30%] object-cover' />
        <div className='mt-[-30px] w-[30%]'>
          <img src="/images/img2.svg" alt="collection" className='w-full object-cover' />
        </div>
        <img src="/images/img3.svg" alt="collection" className='w-[30%] object-cover' />
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-[12px] mt-[30px] md:hidden'>
        <img src="/images/img1.svg" alt="collection" className='w-[140px] h-[140px] object-cover rounded-[8px]' />
        <img src="/images/img2.svg" alt="collection" className='w-[140px] h-[140px] object-cover rounded-[8px]' />
        <img src="/images/img3.svg" alt="collection" className='w-[140px] h-[140px] object-cover rounded-[8px]' />
      </div>
    </section>
  )
}