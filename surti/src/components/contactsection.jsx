import React from 'react'
import Contactheader from '../components/contactheader'
import Contacthero from '../components/contacthero'
import ContactSocialMedia from '../components/contactsocialmedia'
import HeaderReusable from './HeaderResuable'

const contactsection = () => {
  return (
    <div className='bg-gradient-to-r from-teal-50 to-blue-50'>
         <HeaderReusable
        title="CONTACT"
        subtitle="Find answers to common queries."
        imageUrl="https://i.postimg.cc/yxyWbLtV/photo-1639034741369-1e0c771adaeb-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg"
      />
        <Contacthero />
        <ContactSocialMedia />
    </div>
  )
}

export default contactsection