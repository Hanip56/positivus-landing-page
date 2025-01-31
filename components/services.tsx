import React from "react";
import Card from "./ui/card";

const services = [
  {
    line1: "Search engine",
    line2: "optimization",
    variant: "gray",
    src: "/images/service-illustration-1.svg",
  },
  {
    line1: "Pay-per-click",
    line2: "advertising",
    variant: "green",
    src: "/images/service-illustration-2.svg",
  },
  {
    line1: "Social Media",
    line2: "Marketing",
    variant: "black",
    src: "/images/service-illustration-3.svg",
  },
  {
    line1: "Email",
    line2: "Marketing",
    variant: "gray",
    src: "/images/service-illustration-4.svg",
  },
  {
    line1: "Content",
    line2: "Creation",
    variant: "green",
    src: "/images/service-illustration-5.svg",
  },
  {
    line1: "Analytics and",
    line2: "Tracking",
    variant: "black",
    src: "/images/service-illustration-6.svg",
  },
];

export const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-40">
      {/* header */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <h2 className="inline-block bg-main font-medium p-3 rounded-lg">
          Services
        </h2>
        <p className="text-lg max-w-xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
        {services.map(({ line1, line2, src, variant }) => (
          <Card
            key={src}
            src={src}
            alt="Illustration"
            line1={line1}
            line2={line2}
            variant={variant as "gray" | "green" | "black"}
          />
        ))}
      </main>
    </div>
  );
};
