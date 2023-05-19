import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-brimary'>
        <div className='relative bg-primary h-[80vh]'>
        <div className="absolute top-0">
                    <Image src="/assets/images/bike.png" className='h-ful' width={350} height={20} alt='motorcycle' />
                </div>
        <div className='flex h-full justify-around text-white'>
            <div className='items-center flex justify-start flex'>
                <Image src="/assets/images/FLAG.png" width={365} height={629} alt='Kenyan flag' />
            </div>

            <div className='px-10 flex-col space-y-16 items-center justify-cente'>
                <div className='space-y-4'>
                    <h1 className='text-[40px] uppercase font-bold text-[#FF0000]'>Digitizing the</h1>
                    <h1 className='text-[40px] italic uppercase font-bold '>Bodaboda</h1>
                    <h1 className='text-[40px] italic uppercase font-bold text-[#009245]'>Industry</h1>
                    <Image src="/assets/images/line.png" width={496} height={104} alt='logo' />
                </div>
                <p className="text-white text-[14px] w-[611px]">
                The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya.
                With 2 million registered boda riders in Kenya, this business produces Ksh. 370 million each day.
                </p>
                <button className='rounded-lg border-[#FF0000] w-[270px] h-[53px] border-2'>Learn more</button>
            </div>
        </div>
    </div>
    </div>
  )
}
