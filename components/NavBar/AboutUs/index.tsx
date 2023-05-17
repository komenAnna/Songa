import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 w-1/4 flex items-center justify-end">
      <div className="bg-222222 rounded-lg p-4 border border-red-500 text-white">
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
      <img
        src="/assets/pngwing_2.jpg"
        alt="About Us Image"
        className="w-32 h-32 rounded-full ml-4"
      />
    </div>
  );
};

export default AboutUs;
