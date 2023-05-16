import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-brimary'>
        <div className='relative bg-primary h-[110vh]'>
        <div className="absolute top-0">
                    <Image src="/assets/images/bike.png" className='h-ful' width={200} height={20} alt='motorcycle' />
                </div>
        <div className='flex h-full items-center justify-between text-white'>
            <div className=''>
                <Image src="/assets/images/FLAG.png" width={165} height={800} alt='Kenyan flag' />

                
            </div>

            <div className='px-10 flex-col space-y-16 items-center justify-center'>
                <div className='space-y-4'>
                    <Image src="/assets/images/digi.png" width={750} height={104} alt='logo' />
                    <h1 className='text-[90px] italic uppercase font-bold'>Bodaboda</h1>
                    <Image src="/assets/images/ind.png" width={496} height={104} alt='logo' />
                </div>
                <button className='rounded-lg border-[#FF0000] w-[270px] h-[53px] border-2'>Learn more</button>
            </div>
        </div>
    </div>
    </div>
  )
}
