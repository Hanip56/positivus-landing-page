import Image from "next/image";
import React from "react";

const brands = [
  {
    src: "/images/logo-amazon.svg",
    alt: "Amazon logo",
  },
  {
    src: "/images/logo-dribble.svg",
    alt: "Dribble logo",
  },
  {
    src: "/images/logo-hubspot.svg",
    alt: "Hubspot logo",
  },
  {
    src: "/images/logo-notion.svg",
    alt: "Notion logo",
  },
  {
    src: "/images/logo-netflix.svg",
    alt: "Netflix logo",
  },
  {
    src: "/images/logo-zoom.svg",
    alt: "Zoom logo",
  },
];

const Brands = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex justify-around md:justify-between flex-wrap md:flex-nowrap gap-16 lg:gap-20 xl:gap-24 my-14">
      {brands.map(({ src, alt }) => (
        <div key={alt}>
          <Image
            src={src}
            alt={alt}
            width={200}
            height={48}
            className="w-32 md:w-52 grayscale"
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
