// HeroSection.js
import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/signup"); // Replace with your actual sign-up route
  };

  return (
    <header className="bg-bgColor dark:bg-bgColor-dark p-8">
      <div className="grid mt-16 min-h-[82vh] max-h-[30vh] w-full lg:h-[54rem] md:h-[34rem] md:mt-10  place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <Typography className="inline-flex text-xs  py-1 lg:px-4 px-1 font-medium text-primary md:mt-8">
            Exciting News! Introducing our latest innovation
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  dark:text-white !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            Get ready to experience a new level of{" "}
            <span className="text-green-500 leading-snug ">performance</span>{" "}
            and{" "}
            <span className="leading-snug text-green-500">functionality</span>.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
          >
            Empowering businesses with innovative technology and exceptional
            service.
            <br /> Experience seamless integration and superior performance.
          </Typography>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Button
                onClick={handleRegisterClick}
                className="w-full px-4 md:w-[12rem] dark:bg-bgColor dark:text-fontColor"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
