import React from 'react'
import HajjHero from '../components/HajjHero'
import HajjSlider from '../components/HajjSlider'
import HajjPackages from '../components/HajjPackages'
import Hajjfaqs from '../components/Hajjfaqs'
import Hajjstats from '../components/Hajjstats'
import Hajjterms from '../components/Hajjterms'
import Hajjquote from '../components/Hajjquote'


const HajjSection = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-r from-teal-50 to-blue-50'>
    <HajjHero/>
    <HajjSlider/>
    <HajjPackages/>
    <Hajjfaqs/>
    <Hajjstats/>
    <Hajjterms/>
    
    </div>
  )
}

export default HajjSection