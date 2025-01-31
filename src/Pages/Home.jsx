import React from 'react'
import Header from '../Components/Header/Header'
import MainCarousel from '../Components/MainCarousel/MainCarousel.jsx'
import Card from '../Components/Card/Card'
import Footer from '../Components/Footer/Footer'
import Feedback from '../Components/Review/Feedback.jsx'
import Feature from '../Components/Feature/Feature.jsx'
const Home = () => {
  return (
    <div>
    <MainCarousel/>
    <Card/>
    <Feature/>
    <Feedback/>
    <Footer/>
    </div>
  )
}

export default Home
