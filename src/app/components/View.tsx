import React from 'react'
import Header from './Header'
import NectaerfiHero from './NectarfiHero'
import NectarWorkflow from './Workflow'
import YieldCalculator from './YieldCalculator'
import FeatureSections from './FeatureSections'
import Footer from './Footer'

const View = () => {
  return (
    <div className='w-full'>
      <Header />
      <NectaerfiHero />
      <NectarWorkflow />
      <YieldCalculator />
      <h2 className='text-[40px] mt-20 text-center'>How it works</h2>
      <FeatureSections />
      <Footer/>
    </div>
  )
}

export default View