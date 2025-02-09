import React from 'react'
import Aboutheader from './aboutheader'
import Aboutwhoweare from './aboutwhoweare'
import Aboutwhychooseus from './aboutwhychooseus'
import Aboutourvision from './aboutourvision'
import Aboutourmission from './aboutourmission'
import Aboutpride from './aboutpride'
import Team from '../components/ourteam'
import HeaderReusable from './HeaderResuable'
import Reviews from '../components/aboutreviews'

const Aboutsection = () => {
  return (
    <div className='overflow-hidden bg-gradient-to-r from-teal-50 to-blue-50 
    '>
      <HeaderReusable
        title="ABOUT US"
        subtitle="Find answers to common queries."
        imageUrl="https://img.freepik.com/free-vector/airplane-flying-sky_1308-30087.jpg?t=st=1735823698~exp=1735827298~hmac=b9e7d0234572d037835e71af22f13b57c35c752b8ee53545f12c7799746937d6&w=740"
      />
     <Aboutwhoweare />
     <Aboutwhychooseus />
     <Aboutourvision />
     <Aboutourmission />
     <Reviews />
     <Aboutpride />
     <Team />
    </div>
  )
}

export default Aboutsection