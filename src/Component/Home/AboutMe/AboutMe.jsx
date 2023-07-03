import React from 'react';
import profile from '../../../assets/Profile/crop.jpg'
const AboutMe = () => {
  return (
   <div id='about'>
<h2 className='text-center text-4xl font-bold text-white'>About Me</h2>
 <div  className='w-full h-full  md:h-[590px]   container py-2 px-3 lg:px-4 lg:py-4 mx-auto my-20  lg:flex  gap-4 md:flex items-center'>
      <div className='px-5 w-full h-full lg:w-1/2 md:w-1/2'>
<img src={profile} className='rounded-xl w-full h-full' alt="" />
</div>
<div className=' px-5 bg-base-300 hover:text-white snap-y mx-auto w-full h-full lg:w-1/2 md:w-1/2 overflow-hidden'>
<p className='my-5 snap-y h-full w-full mx-auto text-lg sans-serif '>
Hello, I'm Shariful Alam Siddique,
 a passionate and dedicated <span className='text-orange-800 text-xl'> frontend web developer </span>.
 I am a committed student in my fourth year of studies at M.C College,
 located in Sylhet. My journey into the world of programming began when
 I discovered my love for creating visually appealing and interactive websites.
To further enhance my skills, I enrolled in the <span className='text-orange-800 text-xl'>"Programming Hero"</span>
 Course, where I completed the web development curriculum and obtained a certificate.
 This course provided me with comprehensive knowledge and practical experience,
 enabling me to tackle real-world projects with confidence.
 When I'm not coding, you can find me indulging in my hobbies.
 I am an avid <span className='text-orange-800 text-xl'>Video game</span> enthusiast.
 I'm also a big fan of anime series and appreciate the artistry and storytelling 
in this medium.
I am excited to embark on new projects and collaborate
 with like-minded individuals.Feel free to browse through my portfolio 
and <span className='text-orange-800 text-xl'>get in touch</span> with me if you have any inquiries or if you'd like to discuss potential opportunities.
</p>
</div>
    </div>
</div>
  );
};

export default AboutMe;