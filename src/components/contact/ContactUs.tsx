import React from 'react'
import ContactForm from './ContactForm'

import NavBar from '../resuable/NavBar/NavBar'
import Footer from '../resuable/Footer/Footer'

const ContactUs = () => {
  return (
    <div>
        <NavBar index={4}/>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default ContactUs