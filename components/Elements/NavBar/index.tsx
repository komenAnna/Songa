"use client"
import Image from 'next/image'
import Link from 'next/link'
import { ReactComponentElement, useState} from 'react'
import { AiOutlineArrowRight, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const navLinks = [
  {
    id:1,
    title:'About Us',
    url:'/about'
  },
  {
    id:2,
    title:'Partnerships',
    url:'/partnerships'
  },
  {
    id:3,
    title:'Careers',
    url:'/careers'
  },
  {
    id:4,
    title:'Blogs',
    url:'/blogs'
  },
  {
    id:5,
    title:'SONGA Enterprise',
    url:'enterprise'
  },
  {
    id:6,
    title:'Contact Us',
    url:'contact'
  },
]
export const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='text-white text-lg h-auto min-w-full drop-shadow-lg absolute z-10'>
      <div className='flex items-center justify-between '>
        <div className=''>
         <Image
         src='/assets/images/FLAG.png'
         alt='Kenyan flag'
         width={65}
         height={182}
         />
        </div>

        <div className=''>
         <Image
         src='/assets/icons/SONGA-red-logo.png'
         alt='Songa Logo'
         width={167}
         height={150}
         />
        </div>

        <div className='hidden md:flex '>
          {/* map through the array to display each link */}
          <div className='md:px-2 md:text-sm lg:px-4 lg:text-lg'>
            {navLinks.map(navLink=>(
              <Link key={navLink.id} href={navLink.url} className="mx-2 lg:mx-4">{navLink.title}</Link>
            ))}
          </div>
        </div>
        
        <div className='hidden md:flex justify-between items-center md:space-x-2 lg:space-x-6 mr-8'>
          {/* <div>
            <Link href='/' className='border-none rounded-md'>
              Log in
          </Link>
          </div> */}
          <div className=''>
            <button>
            <Link href='/' className='border border-[#FB4552] rounded-full flex items-center justify-center px-2 py-2 hover:bg-black'>
              Sign Up
              <AiOutlineArrowRight className='w-5 h-5 text-[#FB4552] '/>
          </Link>
            </button>
          </div>
        </div>

        {/* Mobile version */}
      <div className='md:hidden pr-6 ' onClick={handleClick}>
          {!nav ? <AiOutlineMenu className='w-8 h-8 cursor-pointer font-bold text-black'/> : < AiOutlineClose className='w-8 h-8 cursor-pointer font-bold text-black'/>}
        </div>
      </div>
      
      <div className={!nav ? 'hidden' : 'flex flex-col items-center justify-center bg-black text-lg border-b-2 border-green-100'}>
            {navLinks.map(link=>(
                <Link key={link.id} href={link.url} className='py-4 xl:hidden'>{link.title}
                </Link>
            ))}
            <div className='flex flex-col mb-4 md:hidden'>
                    {/* <button className='border-none my-4 xl:px-8 py-[8px] outline-none text-white rounded-md'>
                        Log in
                    </button> */}
                    <button className='border border-[#FB4552] rounded-full py-2 px-4 text-white flex items-center justify-center space-x-3'>
                      <Link href='/'>Sign Up</Link>
                      <AiOutlineArrowRight className='w-5 h-5 text-[#FB4552] ml-2'/>
                    </button>
                </div>
        </div>

    </div>
  )
}
