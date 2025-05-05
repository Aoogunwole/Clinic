import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Clinic from '../components/clinic'


const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Contact />
        <Services />
        <WhyChooseUs />
        <Clinic />
    </div>
  )
}

export default Home