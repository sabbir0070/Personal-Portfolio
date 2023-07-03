import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className="w-full container mx-auto">
      <div className=" ml-4 py-2 lg:px-4 lg:py-4  my-3  px-4 border bg-purple-600 ">
        <Typography color="white" className="text-center font-normal  mx-auto ">
          &copy; 2023 Md Shariful Alam Siddique.All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}