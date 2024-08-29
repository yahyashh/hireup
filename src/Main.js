import React from 'react'
import ChooseUs from "./components/ChooseUs";
import Company from "./components/Company/Company";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from './components/Footer';

const Main = () => {
  return (
    <div className=" bg-white">
     <Navbar/>
     <Home/>
     <Jobs/>
     <Company/>
     <ChooseUs/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default Main
