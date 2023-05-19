import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="p-10 relative my-20">
      <div className='absolute '>
        <Image src="/assets/icons/roads.png" fill={true} alt='Roads' />
      </div>
      <div className="z-60 absolute">
      <div className="flex items-center justify-center">
      <div className="w-[615 flex items-center justify-center">
      <div className="bg-[#222222] rounded-lg p-4 border border-red-500 text-white w-[615px]">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          The BODABODA sector is one of the most important contributions to the Kenyan economy. On average, 8 Kenyans rely on one ride for their daily activities, totaling 22 million daily rides in Kenya.
          With 2 million registered boda riders in Kenya, this business produces Ksh. 370 million each day.
        </p>
        <p className="mt-4">
          Despite these strong figures, this business is less controlled by the government, making it a renegade industry.
          At SONGA, we are attempting to dispel this misconception by providing secure, convenient, and economical trips that leave the consumer with the impression that THIS IS MADE FOR ME.
        </p>
        <button className="mt-4 bg-transparent border border-white rounded-full px-4 py-2 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300">
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
      </div>
      <Image
        src="/assets/icons/pngwing.png"
        alt="About Us Image"
        width={515}
        height={0}
        className=""
      />
    </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
