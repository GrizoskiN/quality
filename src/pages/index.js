import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import FirstSection from '@/components/FirstSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <FirstSection/>
    </main>
  )
}
