import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/index/Header'
import FirstSection from '@/components/index/FirstSection'
import SecondSection from '@/components/index/SecondSection'
import ThirdSection from '@/components/index/ThirdSection'
import FourthSection from '@/components/index/FourthSection'
import FifthSection from '@/components/index/FifthSection'
import SixthSection from '@/components/index/SixthSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </main>
  )
}
