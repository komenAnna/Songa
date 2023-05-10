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
          <div>
            <Image src="/assets/icons/logo.svg" alt="logo" width={85} height={85} />
          </div>
        </Link>
        {/* Menu Icon */}
        <button className="p-0 border-0 bg-transparent">
          <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={18} />
        </button>
      </div>

      {/* Desktop */}
      <div className='md:block hidden h-auto bg-primary'>
        <div className='px-5 flex items-center justify-between'>
          <Link href="/">
            <div>
              <Image src="/assets/icons/logo.svg" alt="logo" width={182} height={182} />
            </div>
          </Link>
          <div className='text-white flex items-center justify-center space-x-5'>
            <ul className='flex space-x-5'>
              <li className='underline underline-offset-4'>
                <Link href="/">
                  <div>Home</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Service</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Terms</div>
                </Link>
              </li>
              <li className='text-white/80'>
                <Link href="/">
                  <div>Contact Us</div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Social media icons */}
          <ul className='flex space-x-5'>
            <li>
              <Link href="/">
                <div>
                  <Image src="/assets/icons/social-media/facebook.svg" width={20} height={20} alt={'Facebook'} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>
                  <Image src="/assets/icons/social-media/twitter.svg" width={20} height={20} alt={'Facebook'} />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>
                  <Image src="/assets/icons/social-media/insta.svg" width={20} height={20} alt={'Facebook'} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
