import { Button } from "@mui/material"

export default function Gallery() {
  return (
    <section className='
      w-full pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px]
      flex flex-col md:flex-row
      items-center justify-between
      bg-[#F2F5FF]
      px-[20px] md:px-[120px]
      gap-[40px] md:gap-0
    '>
      {/* Text qismi */}
      <div className='w-full md:w-auto text-center md:text-left'>
        <h2 className='font-[700] text-[24px] md:text-[32px] text-[#000000]'>
          Beautify Your Space
        </h2>
        <p className='
          font-[400] text-[16px] md:text-[20px]
          text-[#2B324C] leading-[32px] md:leading-[39px]
          mt-[16px] md:mt-[20px]
          max-w-[500px] mx-auto md:mx-0
        '>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </p>
        <Button
          className='!mt-[24px] md:!mt-[30px]'
          variant="contained"
          sx={{
            width: { xs: '100%', sm: '222px' },
            height: { xs: '54px', md: '68px' },
            borderRadius: '50px',
            backgroundColor: '#054C73',
            fontSize: { xs: '14px', md: '16px' },
          }}
        >
          Learn More
        </Button>
      </div>

      <img
        src="/images/galery.svg"
        alt="gallery"
        className='w-full md:w-auto max-w-[500px] md:max-w-none object-cover'
      />
    </section>
  )
}