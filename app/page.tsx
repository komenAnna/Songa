import AboutUs from '@/components/AboutUs'
import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
    </div>
  )
}
