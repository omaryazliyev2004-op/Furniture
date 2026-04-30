
import React from 'react'

export default function Header() {
  return (
    <header className='max-w-[1560px] h-[122px] px-[120px] pt-[43px] pb-[38px] '>
        <nav className=' flex items-center justify-between '>
            <a href="#">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <div className='flex items-center gap-[70px] '>
                <a className='text-[14px] font-[600] leading-[100%] text-[#333333] ' href="#">Home</a>
                <a className='text-[14px] font-[600] leading-[100%] text-[#333333] ' href="#">Services</a>
                <a className='text-[14px] font-[600] leading-[100%] text-[#333333] ' href="#">Doctors</a>
                <a className='text-[14px] font-[600] leading-[100%] text-[#333333] ' href="#">Products</a>
                <a className='text-[14px] font-[600] leading-[100%] text-[#333333] ' href="#">Gallery</a>
            </div>
        </nav>
    </header>
  )
}
