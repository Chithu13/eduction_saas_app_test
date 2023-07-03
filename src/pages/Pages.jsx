import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AboutUs from "../components/Aboutus/AboutUs";
import Features from "../components/Featuresection/Features";
import Courses from "../components/Coursessection/Courses";
import Testimonials from "../components/Testimonial/Testimonials";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import ChooseUs from "../components/Chooseus/ChooseUs";
import Preschool from "../components/PreSchool/Preschool";
import Primary from "../components/Primary/Primary";
import Firststd from "../components/Firststd/Firststd";
import Secondstd from "../components/Secondstd/Secondstd";
import Thirdstd from "../components/Thirdstd/Thirdstd";
import Fourthstd from "../components/Fourthstd/Fourthstd";
import Fifthstd from "../components/Fifthstd/Fifthstd";
import Sixthstd from "../components/Sixthstd/Sixthstd";
import Seventhstd from "../components/Seventhstd/Seventhstd";
import Eighthstd from "../components/Eighthstd/Eighthstd";
import Ninethstd from "../components/Ninethstd/Ninethstd";
import Tenthstd from "../components/Tenthstd/Tenthstd";
import Eleventhstd from "../components/Eleventhstd/Eleventhstd";
import Twelvethstd from "../components/Twelvethstd/Twelvethstd";
import Bachelor from "../components/Bachelor/Bachelor";
import Main from "../components/Main/Main";
import Entrance from "../components/Entrance/Entrance";
import Common from "../components/Common/Common";


const Pages = () => {
  return (
    <>
      <Router>
<Header/>        
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<AboutUs/>} />
          <Route exact path='/features' element={<Features/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/chooseus' element={<ChooseUs/>} />
          <Route exact path='/testimonials' element={<Testimonials/>} />
          <Route exact path='/preschool' element={<Preschool/>} />
          <Route exact path='/primary' element={<Primary/>} />
          <Route exact path='/firststd' element={<Firststd/>} />
          <Route exact path='/secondstd' element={<Secondstd/>} />
          <Route exact path='/thirdstd' element={<Thirdstd/>} />
          <Route exact path='/fourthstd' element={<Fourthstd/>} />
          <Route exact path='/fifthstd' element={<Fifthstd/>} />
          <Route exact path='/sixthstd' element={<Sixthstd/>} />
          <Route exact path='/seventhstd' element={<Seventhstd/>} />
          <Route exact path='/eighthstd' element={<Eighthstd/>} />
          <Route exact path='/ninethstd' element={<Ninethstd/>} />
          <Route exact path='/tenthstd' element={<Tenthstd/>} />
          <Route exact path='/eleventhstd' element={<Eleventhstd/>} />
          <Route exact path='/twelvethstd' element={<Twelvethstd/>} />
          <Route exact path='/bachelor' element={<Bachelor/>} />
          <Route exact path='/entrance' element={<Entrance/>} />
          <Route exact path='/main' element={<Main/>} />

          <Route exact path='/common' element={<Common/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
  <Footer/>   
      
  </Router>


    </>
  )
}

export default Pages;