"use client";

import { useState } from "react";
import ProcessCard from "./ui/process-card";

const processes = [
  "Consultation",
  "Research and Strategy Development",
  "Implementation",
  "Monitoring and Optimization",
  "Reporting and Communication",
  "Continual Improvement",
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-40">
      {/* header */}
      <header className="flex items-center gap-10">
        <h2 className="inline-block bg-main p-3 rounded-lg">
          Our working process
        </h2>
      </header>
      <main className="flex flex-col gap-[30px] my-20">
        {processes.map((title, i) => (
          <ProcessCard
            key={title}
            title={title}
            number={`0${i + 1}`}
            description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            isActive={i === activeIndex}
            onClick={() => setActiveIndex((prev) => (prev === i ? -1 : i))}
          />
        ))}
      </main>
    </div>
  );
};

export default Process;
