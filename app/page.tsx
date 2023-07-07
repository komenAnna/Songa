import Image from 'next/image'
import RiderRegistration from '@/components/Landing/RiderRegistration'
import { Hero } from '../components'
import AboutUs from '../components/Landing/AboutUs'


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      {/* <Services />
      <Cards /> */}
      {/* <AboutUs /> */}
      <RiderRegistration />
    </div>
  )
}
