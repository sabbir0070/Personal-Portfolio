import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Component/Home/Home/Footer/Footer';
import Navbar from '../Component/Home/Navbar/Navbarr';
import Navbarr from '../Component/Home/Navbar/Navbarr';

const Main = () => {
  return (
    <div>
   <Navbarr></Navbarr>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;