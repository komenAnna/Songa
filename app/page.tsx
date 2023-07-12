import Image from 'next/image'
import RiderRegistration from '@/components/Landing/RiderRegistration'
import { Hero } from '../components'
import AboutUs from '../components/Landing/AboutUs'
import Partnerships from '@/components/Landing/Partnerships'
import Careers from '@/components/Landing/Careers'


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Partnerships/>
      <Careers/>
      {/* <Services />
      <Cards /> */}
      {/* <AboutUs /> */}
      <RiderRegistration />
    </div>
  )
}
