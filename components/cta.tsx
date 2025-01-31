import React from "react";
import Button from "./ui/button";
import Image from "next/image";

const Cta = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 py-12">
      <div className="bg-gray-10 p-[30px] sm:p-[60px] flex flex-col-reverse md:flex-row items-center md:[&>*]:flex-1 rounded-[45px]">
        <div className="space-y-[26px] flex flex-col items-center text-center md:items-start md:text-start">
          <h3>Let&apos;s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button>Get your free proposal</Button>
        </div>
        <div className="relative h-96 md:h-fit w-full">
          <Image
            className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
            src="/images/proposal-illustration.svg"
            alt="Illustration"
            width={359}
            height={394}
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
