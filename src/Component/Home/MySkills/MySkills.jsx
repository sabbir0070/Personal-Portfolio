import React, { useEffect } from 'react';
import html from '../../../assets/Skillicon/icons8-html-480.png'
import css from '../../../assets/Skillicon/icons8-css-480.png'
import bootstrap from '../../../assets/Skillicon/icons8-bootstrap-480.png'
import tailwind from '../../../assets/Skillicon/icons8-tailwind-css-480.png'
import javascript from '../../../assets/Skillicon/icons8-javascript-480.png'
import react from '../../../assets/Skillicon/icons8-react-480.png'
import nodeJs from '../../../assets/Skillicon/icons8-node-js-480.png'
import express from '../../../assets/Skillicon/express.js.png'
import mongodb from '../../../assets/Skillicon/erkxwhl1gd48xfhe2yld.png'
import firebase from '../../../assets/Skillicon/icons8-firebase-480.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const MySkills = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Animation duration
      once: false, // Only animate once
    });
  }, []);
  return (
    <div id='skills'>
      <h2 className='text-4xl my-14 text-center font-bold text-white'>My Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 w-full container  py-2 px-4 lg:px-4 lg:py-4 mx-auto'>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <img src={html} alt="" />
          <p className='text-center text-lg text-white'>HTML5</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <img src={css} alt="" />
          <p className='text-center text-lg text-white'>CSS3</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={bootstrap} alt="" />
          <p className='text-center text-lg text-white'>Bootstrap</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={tailwind} alt="" />
          <p className='text-center text-lg text-white'>Tailwind</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={javascript} alt="" />
          <p className='text-center text-lg text-white'>Javascript</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={react} alt="" />
          <p className='text-center text-lg text-white'>React</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={nodeJs} alt="" />
          <p className='text-center text-lg text-white'>NodeJs</p>
        </div>
        <div className='mt-3'
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={express} alt="" />
          <p className='text-center text-lg mt-5 text-white'>ExpressJs</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={mongodb} alt="" className='w-full' />
          <p className='text-center text-lg text-white'>MongoDB</p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center">
          <img src={firebase} alt="" />
          <p className='text-center text-lg text-white'>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;