import React from 'react'

const categories = [
  { img: '/images/dining.svg', label: 'Dining' },
  { img: '/images/living.svg', label: 'Living' },
  { img: '/images/bedroom.svg', label: 'Bedroom' },
]

export default function Categories() {
  return (
    <section className='w-full pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] px-[20px] md:px-[120px]'>
      <h2 className='text-center font-[700] text-[24px] md:text-[32px] leading-[100%] text-[#333333]'>
        Browse The Range
      </h2>
      <p className='font-[400] text-[16px] md:text-[20px] text-[#666666] mt-[12px] md:mt-[20px] text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className='flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between gap-[24px] md:gap-[30px] mt-[40px] md:mt-[80px] items-center'>
        {categories.map((cat) => (
          <div key={cat.label} className='flex flex-col items-center w-full sm:w-[45%] md:w-[30%]'>
            <img
              src={cat.img}
              alt={cat.label}
              className='w-[200px] h-[200px] sm:w-full sm:h-auto object-cover rounded-[10px]'
            />
            <p className='font-[600] mt-[16px] md:mt-[30px] text-[18px] md:text-[24px] text-center text-[#333333]'>
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}