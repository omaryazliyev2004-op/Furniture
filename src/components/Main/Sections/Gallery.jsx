import { Button } from "@mui/material"


export default function Gallery() {
    return (
        <section className='max-w-[1560px] pt-[60px] pb-[60px] flex items-center justify-between bg-[#F2F5FF] px-[120px]'>
            <div>
                <h2 className='font-[700] text-[32px] text-[#000000] '>Beautify Your Space</h2>
                <p className='font-[400] text-[20px] text-[#2B324C] leading-[39px] mt-[20px] max-w-[500px] '>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <Button className='!mt-[30px] '
                    variant="contained"
                    sx={{
                        width: "222px",
                        height: "68px",
                        borderRadius: "50px",
                        backgroundColor: "#054C73",
                    }}
                >
                    Learn More
                </Button>
            </div>
            <img src="/images/galery.svg" alt="collection" />
        </section>
    )
}