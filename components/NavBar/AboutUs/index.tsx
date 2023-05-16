import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-black w-96 h-80 p-4 shadow-lg flex items-start justify-start text-white font-montserrat font-semibold text-sm leading-6 overflow-auto">
      <div>
        <h1 className="text-xl font-bold mb-2">About Us</h1>
        <p>
          Who We Are; Boda industry is run by young Kenyans. At SONGA we seek to incorporate technology into the boda System.
          10 towns and Counting | +1M registered rides | +20M Passengers
        </p>
        <h2 className="text-xl font-bold mb-2 mt-4">Mission</h2>
        <p>
          By bringing together key players in the boda boda industry, SONGA seeks to digitize boda boda transport
          through introducing technology and constant improvement
        </p>
        <h2 className="text-xl font-bold mb-2 mt-4">Values/Our Beliefs</h2>
        <p>
          Safety: Our riders are vetted, our bikes insured
          Convenient: Our services are cheap and easy to help you plan
          Customer Focus: Based on your interaction, we are able to come up with rides designed just for you
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
