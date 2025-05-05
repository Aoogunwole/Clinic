import React from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ChooseClinic from '../components/ChooseClinic'


const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Contact />
        <Services />
        <WhyChooseUs />
        <ChooseClinic />
    </div>
  )
}

export default Home