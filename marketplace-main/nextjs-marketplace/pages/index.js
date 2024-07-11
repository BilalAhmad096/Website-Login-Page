import { useContext } from 'react'

import { GlobalContext } from '@/services/context/ContextProvider'

import HeroSection from '@/sections/Home/HeroSection'
import TrendingProjects from '@/sections/Home/TradingProjects'
import TopCategories from '@/sections/Home/TopCategories'
import InviteCreators from '@/sections/Home/InviteCreators'
import FAQ from '@/sections/Home/FAQ'
import Layout from '@/components/layout/Layout'

export default function Home () {
  const { globalState } = useContext(GlobalContext)
  const { auth } = globalState
  console.log(auth)
  return (
    <Layout>
    <div className='home'>
      <HeroSection />
      <TrendingProjects />
      <TopCategories />
      <InviteCreators />
      <FAQ />
    </div>
    </Layout>
  )
}
