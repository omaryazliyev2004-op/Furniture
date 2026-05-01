
import React from 'react'

export default function Collection() {
    return (
        <section className='max-w-[1560px] pt-[60px] pb-[60px]  px-[120px]'>
            <h2 className='text-center font-[700] text-[32px] leading-[100%] text-[#333333] '>Inspiration Collection</h2>
            <p className='font-[400] text-[20px] text-[#666666] mt-[20px] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex justify-between mt-[80px] '>
                <img src="/images/img1.svg" alt="collection" />
                <div className='mt-[-30px] '>
                    <img src="/images/img2.svg" alt="collection" />
                </div>
                <img src="/images/img3.svg" alt="collection" />
            </div>
        </section>
    )
}
