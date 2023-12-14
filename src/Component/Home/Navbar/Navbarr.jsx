import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
const Navbarr = () => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-normal hover:bg-orange-900 rounded px-6 py-2"
      >
        <a href="#home" className="flex items-center text-lg font-bold   text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:bg-orange-900 rounded px-6 py-2"
      >
        <a href="#about" className="flex items-center text-lg font-bold  text-white">
        About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="red"
        className="p-1 font-normal text-[#eceff1] hover:bg-orange-900 rounded px-6 py-2"
      >
        <a href="#skills" className="flex text-lg font-bold items-center text-[#eceff1]">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:bg-orange-900 rounded px-6 py-2"
      >
        <a href="#project" className="flex text-lg font-bold  text-white items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:bg-orange-900 rounded px-6 py-2"
      >
        <a href="#contact" className="flex text-lg font-bold  text-white items-center">
        Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto sticky top-0  bg-orange-900  mt-2 py-2 px-4 lg:px-4 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 text-white cursor-pointer py-1.5 text-3xl"
        >
          Md Shariful Alam Siddique
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {/* <Button color="red" size="sm" className="hidden lg:inline-block">
          <span> Buy Now </span>
        </Button> */}
        <IconButton
          variant="text"
          className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 bg-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* <Button color="red" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Navbarr;