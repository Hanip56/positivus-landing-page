import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
};

const ProcessCard = ({
  description,
  isActive,
  number,
  title,
  onClick,
}: Props) => {
  return (
    <div
      className={cn(
        "p-6 md:p-10 sm:p-[60px] border border-black-100 drop-shadow-bold rounded-[45px]",
        isActive ? "bg-main" : "bg-gray-10"
      )}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="flex items-center break-all">
          <span className="text-4xl lg:text-5xl xl:text-6xl mr-4 md:mr-[25px] flex-shrink-0">
            {number}
          </span>{" "}
          {title}
        </h3>
        <button onClick={onClick} className="hover:opacity-80 flex-shrink-0">
          <Image
            src={isActive ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}
            alt="icon minus"
            className="size-10 md:size-12 xl:size-14"
            width={58}
            height={58}
          />
        </button>
      </div>
      {/* desc */}
      {isActive && (
        <div>
          <div className="h-px w-full bg-black my-[30px]"></div>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProcessCard;
