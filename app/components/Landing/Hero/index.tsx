import Image from 'next/image'
import React from 'react'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

export const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 h-screen'>
            <div className="relative flex items-center justify-center">
                <div className="absolute top-0 z-10">
                    <Image src="/assets/images/bike.png" className="h-full" width={350} height={20} alt="motorcycle" />
                </div>
                <div className="flex h-full text-white">
                    <div className="items-start flex justify-start ml-auto">
                        <Image src="/assets/images/FLAG.png" width={365} height={629} alt="Kenyan flag" />
                    </div>
                </div>
            </div>



            <div className='relative z-20 px-10 flex flex-col space-y-16 items-start justify-center'>
                <div className='space-y-4'>
                    <h1 className='text-[40px] uppercase font-bold text-[#FF0000]'>Digitizing the</h1>
                    <h1 className='text-[40px] italic uppercase font-bold '>Bodaboda</h1>
                    <h1 className='text-[40px] italic uppercase font-bold text-[#009245]'>Industry</h1>
                    <Image src="/assets/images/line.png" width={379.5} height={104} alt='logo' />
                </div>
                <p className="text-white text-[14px] md:w-[611px]">
                    The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya.
                    With 2 million registered boda riders in Kenya, this business produces Ksh. 370 million each day.
                </p>
                <button className='rounded-lg border-[#FB4552] w-[270px] h-[53px] border-2 flex items-center justify-center space-x-3'>Learn More
                    <ArrowSmallRightIcon className='h-5 w-5 text-[#FB4552] ml-2' />
                </button>
            </div>
        </div>
    );
};
