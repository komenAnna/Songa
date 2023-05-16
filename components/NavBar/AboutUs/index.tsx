import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-xl">
        Who We Are; Boda industry is run by young Kenyans. At SONGA we seek to incooperate technology into the boda System.<br/>
        10 towns and Counting|+1M registered rides| +20M Passengers
      </p>
      <h2 className="text-3xl font-bold mb-4">Mission</h2>
      <p>By bringing together Key players in the boda boda industry, SONGA seeks to digitize boda boda transport<br/> 
      through introducing technology and constatnt improvement</p><br/>

      <h2 className="text-3xl font-bold mb-4">Values/ Our Beliefs</h2>
      <p>Safety: Our riders are vetted, our bikes insured<br/>
      Convinient: Our services are cheap and easy to help you plan<br/>
      Customers Focus: Based on your interaction, we are able to come up with rides designed just for you
      </p>
    </div>
  );
};

export default AboutUs;
