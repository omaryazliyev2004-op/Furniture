import { Button } from "@mui/material"

export default function Hero() {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center md:justify-end"
        style={{ backgroundImage: "url('/images/hero.svg')" }}
      >
        <div className='
          w-[90%] md:w-[643px]
          mx-auto md:mx-0 md:mr-[120px]
          mt-[100px] md:mt-0
          pt-[30px] pb-[30px] pl-[24px] pr-[24px]
          md:pt-[37px] md:pb-[41px] md:pl-[39px] md:pr-[45px]
          md:absolute md:top-[170px] md:right-[120px]
          bg-[#DFE9F4] rounded-[10px]
        '>
          <span className='font-[600] text-[#111111]'>New Arrival</span>
          <h2 className='font-[700] text-[36px] md:text-[52px] leading-[48px] md:leading-[65px] text-[#054C73] max-w-[409px] mt-[20px]'>
            Discover Our New Collection
          </h2>
          <p className='font-[500] text-[16px] md:text-[18px] leading-[32px] md:leading-[39px] text-[#333333] mt-[20px] max-w-[480px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Button
            className='!mt-[24px] md:!mt-[30px]'
            variant="contained"
            sx={{
              width: { xs: '100%', sm: '229px' },
              height: { xs: '54px', md: '70px' },
              borderRadius: '50px',
              backgroundColor: '#054C73',
              fontSize: { xs: '14px', md: '16px' },
            }}
          >
            BUY NOW
          </Button>
        </div>
      </section>

      {/* Features bar */}
      <div className='
        w-full px-[20px] md:px-[120px]
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        bg-[#F2F5FF]
        py-[30px] md:py-[48px]
        gap-[24px] md:gap-0
        md:h-[150px]
      '>
        {[
          { icon: '/images/icon1.png', title: 'Free Delivery' },
          { icon: '/images/icon2.png', title: 'Support 24/7' },
          { icon: '/images/icon3.png', title: '100% Authentic' },
        ].map((item) => (
          <div key={item.title} className='flex items-center gap-[20px] md:gap-[27px]'>
            <img src={item.icon} alt={item.title} className='w-[40px] md:w-auto' />
            <div>
              <h4 className='font-[600] text-[18px] md:text-[24px] text-[#333333]'>
                {item.title}
              </h4>
              <p className='text-[#333333] mt-[4px] md:mt-[6px] text-[14px] md:text-[16px]'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}