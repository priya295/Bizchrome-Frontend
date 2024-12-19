import React from 'react';
import Header from "../../components/Freelancer/Layout/Header.jsx";
import Section1 from '../../components/Global/AboutUs/Section1.jsx';
import Section2 from '../../components/Global/AboutUs/Section2.jsx';
import Section3 from '../../components/Global/AboutUs/Section3.jsx';
import Section4 from '../../components/Global/AboutUs/Section4.jsx';
import Section5 from '../../components/Global/AboutUs/Section5.jsx';
import Footer from "../../components/Global/Layouts/Footer.jsx"

const AboutLayout = () => {

  return (
    <>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>

    </>
  )
}

export default AboutLayout