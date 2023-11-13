import { Avatar, Button } from '@material-tailwind/react';
import React from 'react';
import profile from '../../../assets/Profile/profile .jpg'
import Resume from '../../../assets/Resume/Resume.pdf'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import Aos from 'aos';

const Banner = () => {
  const handleDownload = () => {
    // const fileUrl = '/path/to/your/file.pdf'; // Replace with the actual file path
    const fileUrl = Resume; // Replace with the actual file path

    // Create a virtual link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'document.pdf'; // Specify the desired file name

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [text] = useTypewriter({
    words: ['Front-end Web Developer', 'MERN-Stack Developer', 'Full-Stack Web Developer',],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div id="home" className='w-full  space-x-10 container py-2 px-4 lg:px-4 lg:py-4 mx-auto my-10  lg:flex gap-4 md:flex items-center'>
      <div className='px-3 lg:px-0 md:px-0 space-y-3 w-full lg:w-1/2 md:w-1/2'>
        <h2 className=' text-5xl text-white'>Hi! I'm</h2>
        <h3 className="text-4xl text-white">Shariful Alam Siddique</h3>
        <h2 className='text-deep-orange-500 text-3xl'>{text}</h2>
        <p className='text-lg text-gray-100'>Welcome to my portfolio! I'm a passionate Frontend and MERN stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and web applications.</p>
        <div className="flex w-max  gap-4">
          <a href="#contact"><Button className='bg-orange-900'>Get In touch</Button></a>
          <Button onClick={handleDownload} className='bg-orange-900'>Download Resume</Button>
        </div>
      </div>
      <div className='w-full lg:w-1/2 md:w-1/2 text-cente'>
        <Avatar

          size="lg"
          alt="avatar"
          src={profile}
          className="ring-4 w-3/4 h-3/4 my-14 ring-green-500/30 border border-green-500 shadow-xl shadow-green-900/20
 transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in"
        />
      </div>
    </div>
  );
};

export default Banner;