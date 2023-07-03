import React from 'react';
import CarToys from '../../../assets/ProjectImage/CarToys.png';
import SportsAcademies from '../../../assets/ProjectImage/SportsAcademies .png';
import FoodNetwork from '../../../assets/ProjectImage/FoodNetworkBD.png'
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const MyProject = () => {
  return (
    <div id='project' className='w-full container py-2 px-4 lg:px-4 lg:py-4 mx-auto mb-10'>
      <h2 className='text-center font-bold py-20 text-white text-4xl'>My Projects</h2>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
<div className='w-full'>
<div className='w-full h-[300px] shadow-xl rounded-xl overflow-y-scroll transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in'>
<img src={CarToys} className='w-full rounded-xl' alt="" />
</div>
<h2 className='text-2xl my-3 md:text-left lg:left-4 text-center font-bold text-orange-800 mx-auto'>Car Toys Shop</h2>
<div className='flex gap-5 md:justify-start justify-center'>
<a href='https://github.com/sabbir0070/car-toy-shop-client'> <p> <FaGithub className='w-10 h-8 text-white'></FaGithub> </p> </a>
<a href='https://github.com/sabbir0070/car-toy-shop-server'> <p> <FaLink className='w-10 h-8 text-blue-300'></FaLink> </p> </a>
<a href=' https://toys-car-project.web.app/'> <p className='flex gap-2 text-2xl font-bold text-white'> <FaExternalLinkAlt className='w-8 h-8 text-blue-500'></FaExternalLinkAlt> Demo </p> </a>
</div>
</div>
<div className='w-full'>
<div className='w-full  h-[300px] shadow-xl rounded-xl overflow-y-scroll transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in'>
<img src={SportsAcademies} className='w-full rounded-xl' alt="" />
</div>
<h2 className='text-2xl my-3 md:text-left lg:left-4 text-center font-bold text-orange-800 mx-auto'>Sports Academies</h2>
<div className='flex gap-5 md:justify-start justify-center'>
<a href='https://github.com/sabbir0070/sports-academies-client'> <p> <FaGithub className='w-10 h-8 text-white'></FaGithub> </p> </a>
<a href='https://github.com/sabbir0070/sports-academies-server'> <p> <FaLink className='w-10 h-8 text-blue-300'></FaLink> </p> </a>
<a href='https://sports-academies-project-fe16c.web.app/'> <p className='flex gap-2 text-2xl font-bold text-white'> <FaExternalLinkAlt className='w-8 h-8 text-blue-500'></FaExternalLinkAlt> Demo </p> </a>
</div>
</div>
<div className='w-full'>
<div className='w-full  h-[300px] shadow-xl rounded-xl overflow-y-scroll transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in'>
<img src={FoodNetwork} className='w-full rounded-xl' alt="" />
</div>
<h2 className='text-2xl my-3 md:text-left lg:left-4 text-center font-bold text-orange-800 mx-auto'>The Food Network</h2>
<div className='flex gap-5 md:justify-start justify-center'>
<a href='https://github.com/sabbir0070/recipe-hunter-client'> <p> <FaGithub className='w-10 h-8 text-white'></FaGithub> </p> </a>
<a href='https://github.com/sabbir0070/recipe-hunter-server'> <p> <FaLink className='w-10 h-8 text-blue-300'></FaLink> </p> </a>
<a href='https://cheif-recipe-hunter-client.web.app/'> <p className='flex gap-2 text-2xl font-bold text-white'> <FaExternalLinkAlt className='w-8 h-8 text-blue-500'></FaExternalLinkAlt> Demo </p> </a>
</div>
</div>

</div>
    </div>
  );
};

export default MyProject;