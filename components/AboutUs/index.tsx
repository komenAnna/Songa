import Image from 'next/image';
import React from 'react';


const AboutUs: React.FC = () => {
  return (
    // component container 
    <div className="h-[120vh] relative my-20 md:min-w-full"> 
        <div className='absolute inset-0 bg-[#181818] h-[150vh] lg:h-[100vh]'>
          <img src="/assets/images/roads.png" 
                alt="roads"      
                className='hidden lg:block w-full md:w-4/5 h-[100vh] absolute z-0 -top-[10%] left-0 '
          />

          <div className='absolute  flex flex-col justify-center lg:flex-row '>
            <div className="bg-[#222222] rounded-lg  my-4 mx-12 p-4 border border-red-500 text-white -mt-6 w-3/4 h-auto  md:w-auto lg:ml-[24px] lg:mt-6 lg:w-[615px]">
            <Image className='my-2 mx-auto p-1 md:my-4 md:p-3'
                            src='/assets/images/line.png'
                            alt = 'hr'
                            width={335}
                            height={0}
                        />
              <h1 className="text-xl font-bold mb-4 text-center md:text-start md:text-2xl lg:text-3xl">About Us</h1>
              <p className='text-[14px] md:text-[16px]'>
                The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya.
                With 2 million registered boda riders in Kenya, this business produces Ksh. 370 million each day.
              </p>
              <p className="mt-4 text-[14px] md:text-[16px]">
                Despite these strong figures, this business is less controlled by the government, making it a renegade industry.
                At SONGA, we are attempting to dispel this misconception by providing secure, convenient, and economical trips that leave the consumer with the impression that THIS IS MADE FOR ME.
              </p>
        <button className="hidden sm:flex mt-4 bg-transparent border border-white rounded-full px-4 py-2 items-center justify-center text-white hover:bg-white hover:text-black transition duration-300">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </button>
          <Image className='my-2 mx-auto p-3 md:my-3 md:p-3'
              src='/assets/images/line.png'
              alt = 'hr'
              width={335}
              height={0}
          />
          </div>
          <div className='relative lg:flex flex-row justify-end items-center gap-48'>
            {/* <Image className='md:hidden absolute z-0'
              src='/assets/images/road-bg.png'
              alt='roads'
              width={375}
              height={0}

            /> */}
            <div>
            <Image className='mx-auto '
              src="/assets/icons/pngwing.png"
              alt="About Us Image"
              width={640}
              height={0}
              
            />
            </div>
            <div>
            <Image className='hidden md:hidden lg:block'
            src='/assets/images/miniflag.png'
            alt="kenyan flag"
            width={72}
            height={0}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
