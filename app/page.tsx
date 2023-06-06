import AboutUs from '@/app/components/Landing/AboutUs'
import { Hero } from '@/app/components'
import Image from 'next/image'
import RiderRegistration from '@/app/components/Landing/RiderRegistration'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <AboutUs /> */}
      <RiderRegistration />
    </div>
  )
}
