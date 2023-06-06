import AboutUs from '@/components/Landing/AboutUs'
import { Hero } from '@/components'
import Image from 'next/image'
import RiderRegistration from '@/components/Landing/RiderRegistration'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <AboutUs /> */}
      <RiderRegistration />
    </div>
  )
}
