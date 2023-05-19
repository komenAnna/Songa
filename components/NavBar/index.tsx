import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className="bg-primary h-auto shadow-md text-white">
      {/* Mobile */}
      <div className='items-center flex justify-between px-5 md:hidden'>
        {/* Logo */}
       <Link href="/">
       <Image src="/assets/icons/logo.svg" alt="logo" width={85} height={85} />
       </Link>
        {/* Menu Icon */}
        <Image src="/assets/icons/menu.svg" alt="logo" width={24} height={18} />
      </div>

      {/* Desktop */}
      <div className='md:block hidden h-auto bg-primary'>
        <div className='px-5 flex items-center justify-between'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="logo" width={182} height={182} />
        </Link>
        <div className='text-white flex items-center justify-center space-x-5'>
          <ul className='flex space-x-5'>
            <li className='underline underline-offset-4'>
              <Link href="/">Home</Link>
            </li>
            <li className='text-white/80'>
              <Link href="/">Service</Link>
            </li>
            <li className='text-white/80'>
              <Link href="/">Terms</Link>
            </li>
            <li className='text-white/80'>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
         {/* Social media icons */}
         <ul className='flex space-x-6'>
            <li>
              <Link href="/">
                <Image className="h-[20px]"  src="/assets/icons/social-media/facebook.svg" width={20} height={20} alt={'Facebook'} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src="/assets/icons/social-media/twitter.svg" width={20} height={20} alt={'Facebook'} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src="/assets/icons/social-media/insta.svg" width={20} height={20} alt={'Facebook'} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
