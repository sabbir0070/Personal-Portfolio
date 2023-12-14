import { Typography } from "@material-tailwind/react";
import "./Footer.css"
export default function Footer() {
  return (
    <div className="w-full container mx-auto">
{/* <h2 className="text-4xl redc">hello</h2>         */}
      <div className=" ml-4 py-2 lg:px-4 lg:py-4  my-3  px-4 border bg-orange-900 ">
<Typography color="white" className="text-center font-normal  mx-auto ">
          &copy; 2023 Md Shariful Alam Siddique.All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}