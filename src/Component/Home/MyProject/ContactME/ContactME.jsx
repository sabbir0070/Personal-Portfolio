import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

const ContactME = () => {
  const form = useRef();

const handleSuccess = ()=>{
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your Message Send Successful",
  showConfirmButton: false,
  timer: 1500
})
}

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_6doikpt',
      'template_3loy65g',
      form.current,
      'YCgWjemLMRKvcaAI6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div id='contact'>
      <h2 className='text-center pt-10 font-bold text-white text-4xl'>Contact Me</h2>
      <div className='w-ful container px-4 lg:px-4 lg:py-4 mx-auto my-20  lg:flex gap-14 md:flex'>
        <div className='px-3 lg:px-0 md:px-0 w-full lg:w-1/2 md:w-1/2'>
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label className='text-white'>Name</label>
              <input className='text-white' type="text" placeholder='Enter Your Name' name="user_name" />
              <label className='text-white'>Email</label>
              <input className='text-white' placeholder='Enter Your Email' type="email" name="user_email" />
              <label className='text-white'>Message</label>
              <textarea className='text-white' placeholder='Write Here.....' name="message" />
              <input onClick={handleSuccess} className='text-white'  type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </div>
        <div className='space-y-2 mt-4 text-white text-lg px-3'>
          <h2 className='text-3xl my-5 text-white text-bold'>Contact Info:</h2>
          <p> <span> </span> mdsharifulalamsiddique79672@gmail.com</p>
          <p> <span></span> +8801752953541 </p>
          <p> <span></span> Nandail-Mymensingh, Bangladesh </p>
          <h2 className='text-3xl py-4'>Social Networks</h2>
          <div className='flex gap-7 mt-5'>
            <Link to='https://www.facebook.com/sabbir.msa/'> <p className='bg-blue-900 w-10 h-10 rounded-full'> <FaFacebook className='w-10 text-white h-10'></FaFacebook> </p> </Link>
            <Link to='https://wa.link/4hd0il' > <p className='bg-green-700 w-10 h-10 rounded-full'> <FaWhatsapp className='w-10 text-white h-10'></FaWhatsapp> </p></Link>
            <Link to='https://www.linkedin.com/in/md-shariful-alam-siddique-025895219/'> <p className='w-10 h-10 rounded-full'> <FaLinkedinIn className='w-10 text-red-400 h-10'></FaLinkedinIn> </p></Link>
            <Link to='https://github.com/sabbir0070'> <p className='bg-black w-10 h-10 rounded-full'> <FaGithub className='w-10 text-white h-10'></FaGithub> </p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const StyledContactForm = styled.div`
  width: 100%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

export default ContactME;