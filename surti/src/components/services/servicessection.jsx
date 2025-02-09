import React from 'react'
import HeaderReusable from '../HeaderResuable'
import HajjAndUmrahServices from './hajjumrahservice'
import VisaServices from './visaservices'
import HoneymoonService from './honeymoonservice'
import GroupToursService from './grouptourservice'

const services = () => {
  return (
    <div className='bg-gradient-to-r from-teal-50 to-blue-50'>
       <HeaderReusable
        title="SERVICES"
        subtitle="Find answers to common queries."
        imageUrl="https://i.postimg.cc/yxyWbLtV/photo-1639034741369-1e0c771adaeb-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg"
      />
      
       <VisaServices />
       <HajjAndUmrahServices />
       <GroupToursService />
       <HoneymoonService />
       
    </div>
  )
}

export default services