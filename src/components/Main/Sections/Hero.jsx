import React from 'react'
import { Card, Button } from "@mui/material"


export default function Hero() {
  return (
    <>
      <section className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/hero.svg')" }}>
        <div className='absolute top-[170px] right-[120px] w-[643px] pt-[37px] pb-[41px] pl-[39px] pr-[45px] h-[443px] bg-[#DFE9F4] rounded-[10px] '>
          <span className='font-[600] space-x-[3px] text-[#111111] '>New Arrival</span>
          <h2 className='font-[700] text-[52px] leading-[65px] text-[#054C73] max-w-[409px] mt-[20px] '>Discover Our New Collection</h2>
          <p className='font-[500] text-[18px] leading-[39px] text-[#333333] mt-[20px] max-w-[480px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Button className='!mt-[30px] '
            variant="contained"
            sx={{
              width: "229px",
              height: "70px",
              borderRadius: "50px",
              backgroundColor: "#054C73",
            }}
          >
            BUY NOW
          </Button>
        </div>
      </section>
      <div className='max-w-[1560px] h-[150px] px-[120px] flex items-center justify-between bg-[#F2F5FF] py-[48px] '>
        <div className='flex items-center gap-[27px] '>
          <img src="/images/icon1.png" alt="" />
          <div className=''>
            <h4 className='font-[600] text-[24px] text-[#333333] '>Free Delivery</h4>
            <p className='text-[#333333] mt-[6px] '>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex items-center gap-[27px] '>
          <img src="/images/icon2.png" alt="" />
          <div className=''>
            <h4 className='font-[600] text-[24px] text-[#333333] '>Support 24/7</h4>
            <p className='text-[#333333] mt-[6px] '>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='flex items-center gap-[27px] '>
          <img src="/images/icon3.png" alt="" />
          <div className=''>
            <h4 className='font-[600] text-[24px] text-[#333333] '>100% Authentic</h4>
            <p className='text-[#333333] mt-[6px] '>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  )
}
