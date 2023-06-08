import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Services() {
  return (
    <div className='mx-auto w-full bg-white h-[80vh] mt-20 relative'>
        {/* dESKTOP */}
        <div className=' flex flex-col mx-auto absolute -top-[10%] w-full z-0'>
            <h1 className='md:text-3xl uppercase mx-auto text-white font-bold'>how it works</h1>
            <div className='relative z-0 md:flex flex-row justify-center items-center'>
            <div className='border-2 border-red-500 rounded-lg bg-[#181818] md:w-[848px] h-auto p-6 mx-auto'>
                <p className='text-[#009245] text-lg ml-56'>User(Passenger) downloads the  app from playstore after which they  sign up to become a user. They  then top up their wallet so as to  request for rides. <br/>
                    The only means of payment is  SONGA POINTS that are loaded on  the wallet. 1ksh = 1pt <br/>
                    Rider , after vetting from SONGA  management, gets the rider  interface of the app. Their main  work is to pick ride requests and  are paid using SONGA pts which  are later redeemable for ksh.
                    The passenger loads their wallet  with SONGA pts and uses these pts  to seek  services…. The  rider  collects pts for services offered and  redeem them for cash.
                </p>
            </div>
            <Image className='absolute left-[20%] shadow-md'
                src='/assets/images/phone-img.png'
                alt='songa-app'
                width={250}
                height={0}
            />
            </div>
        </div>
    </div>
  )
}

export default Services