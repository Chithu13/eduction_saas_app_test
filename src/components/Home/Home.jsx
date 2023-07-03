import React from "react";
import HeroSection from "../Herosection/HeroSection";
import AboutUs from "../Aboutus/AboutUs";
import Company from "../Companysection/Company";
import Courses from "../Coursessection/Courses";
import Features from "../Featuresection/Features";
import ChooseUs from "../Chooseus/ChooseUs";
import FreeCourse from "../Freecoursesection/FreeCourse";
import Testimonials from "../Testimonial/Testimonials";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {

    return (
        <>

         <HeroSection/>
         <Company/>
        <AboutUs/>
        <Courses/>
        <Features/>
        <ChooseUs/>
        <FreeCourse/>
        <Testimonials/>
        <Newsletter/>
        
        
         
         
        
    
    
      {/* <HeroSection/>
      <CompanySection />
      <AboutUs />
      <Courses />
      <Features />
      <ChooseUs/>
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer /> */}
        
        </>
    );
}

export default Home;