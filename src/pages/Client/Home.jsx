import React from 'react';
import Header from '../../components/Client/Layouts/Header.jsx';
import Section1 from "../../components/Client/Home/Section1.jsx";
import Section2 from "../../components/Client/Home/Section2.jsx";

const HomeLayout = () => {
  return (
    <>
    <Header /> 
   <Section1/> 
   <Section2/>

    </>
  )
}

export default HomeLayout