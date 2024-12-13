import React from 'react';
import Header from '../../components/Client/Layouts/Header.jsx';
import Section1 from "../../components/Client/Home/Section1.jsx";
import Section2 from "../../components/Client/Home/Section2.jsx";
import Header2 from "../../components/Client/Layouts/Header2.jsx";
import Section3 from '../../components/Client/Home/Section3.jsx';
import Section4 from '../../components/Client/Home/Section4.jsx';
import Section5 from '../../components/Client/Home/Section5.jsx';

const HomeLayout = () => {
  return (
    <>
    {/* <Header /> */}
    <Header2/>
    <Section1/>
    <Section3/>
    <Section4/>
    <Section5/>
    {/* <Section2/> */}
    </>
  )
}

export default HomeLayout