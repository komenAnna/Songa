import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

export const Hero = () => {
    return (
        <div className='relative h-[100vh] w-screen'>
            <div className=''>
                <Image
                src='/assets/images/bg-image.png'
                alt='Hero Image'
                fill={true}
                className="object-cover md:object-fill h-[80vh] absolute z-0 left-0"
                />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 absolute z-2">
                <span className="text-white w-full mx-12 px-12 md:pl-20">
                   <h1 className='text-2xl md:text-5xl font-bold'>DIGITIZING THE BODA BODA INDUSTRY.</h1>
                   <p className="text-[#ffffff] font-light text-lg my-8 md:w-[611px]">
                   Ride on us and experience the technology our rides have to offer.
                    </p>
                    <div className='flex flex-col gap-y-8  pt-4 md:space-x-12 md:flex-row md:w-full'>
                        <button className='border-none bg-[#009245] px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center rounded-lg hover:bg-[#FB4552]'>
                            <Link href='#rider_reg'>
                                Become a Rider
                            </Link>
                        </button>
                        <button  className='border border-[#FB4552] bg-transparent px-12 py-[8px] w-[250px] outline-none text-[#ffffff] text-center rounded-lg hover:bg-[#000000]'>
                            <Link href='#about'>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </span>       
            </div>
        </div>
    );
};
