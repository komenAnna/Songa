import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Cards() {
  return (
    <div className='w-full py-6 px-4 bg-white'>
        {/* CARDS */}
        <div className='mx-auto py-4 px-4 md:grid grid-cols-3 gap-8'>
            <div className='w-auto bg-[#181818] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-3rem] '
                src='/assets/icons/card1-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-8'>Safety</h2>
            <p className='text-center text-white p-2'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them</p>
            <Link href='/' className='text-red-500 text-center p-1'>Learn More</Link>
        </div>

        <div className='w-full bg-[#181818] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-3rem] '
                src='/assets/icons/card1-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-8'>Safety</h2>
            <p className='text-center text-white p-2'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them</p>
            <Link href='/' className='text-red-500 text-center p-1'>Learn More</Link>
        </div>

        <div className='w-full bg-[#181818] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <Image className='w-20 mx-auto mt-[-3rem] '
                src='/assets/icons/card1-icon.png' alt='card-1 icon' width={84} height={84}
            />
            <h2 className='text-2xl text-white font-bold text-center py-8'>Safety</h2>
            <p className='text-center text-white p-2'>Our riders are vetted. Safety begins with you and everyone in  the society is tasked with their safety and those around them</p>
            <Link href='/' className='text-red-500 text-center p-1'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default Cards