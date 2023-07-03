import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import MySkills from './MySkills/MySkills';
import MyProject from './MyProject/MyProject';
import ContactME from './MyProject/ContactME/ContactME';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <MyProject></MyProject>
      <ContactME></ContactME>
    </div>
  );
};

export default Home;