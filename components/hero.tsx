import Image from "next/image";
import React from "react";
import Button from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-4 items-center md:items-start md:flex-row md:[&>*]:flex-1 my-4">
      <div className="flex flex-col items-center md:items-start space-y-[98px]">
        <h1 className="max-w-lg text-center md:text-start">
          Navigating the digital landscape for success
        </h1>
        <Button>Book a consultation</Button>
      </div>
      <Image
        src={"/images/hero-illustration.svg"}
        alt="hero illustration"
        className="w-[27rem] xl:w-auto object-contain"
        width={600}
        height={515}
      />
    </div>
  );
};

export default Hero;
