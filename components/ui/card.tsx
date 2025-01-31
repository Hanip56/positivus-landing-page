import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  line1: string;
  line2?: string;
  src: string;
  alt: string;
  variant?: "gray" | "green" | "black";
};

const Card = ({ alt, line1, src, variant = "gray", line2 }: Props) => {
  const containerClassName =
    variant === "green"
      ? "bg-main"
      : variant === "black"
      ? "bg-black-100"
      : "bg-gray-10";

  const titleClassName =
    variant === "green"
      ? "bg-white"
      : variant === "black"
      ? "bg-white text-black"
      : "bg-main";

  return (
    <div
      className={cn(
        `p-[50px] w-full sm:h-[310px] rounded-[45px] border border-black-100 drop-shadow-[0_5px_0_#191A23] flex flex-col-reverse sm:flex-row items-center gap-8 [&>*]:flex-1`,
        containerClassName
      )}
    >
      {/* desc */}
      <div className="flex flex-col gap-y-8 justify-between h-full">
        <h3 className="font-medium max-w-sm flex flex-col items-center sm:items-start flex-grow-0">
          <span
            className={cn(`inline-block p-1 px-2 rounded-lg`, titleClassName)}
          >
            {line1}
          </span>
          <span
            className={cn(`inline-block p-1 px-2 rounded-lg`, titleClassName)}
          >
            {line2}
          </span>
        </h3>
        <button className="flex items-center gap-4 hover:opacity-80 transition-all flex-shrink-0 [&>*]:flex-shrink-0">
          <div
            className={cn(
              `w-[41px] h-[41px] rounded-full`,
              variant === "black" ? "bg-white" : "bg-black-100"
            )}
          >
            <Image
              src={
                variant === "black"
                  ? "/images/icon-arrow-up-right-white.svg"
                  : "/images/icon-arrow-up-right.svg"
              }
              alt="Arrow icon"
              width={50}
              height={50}
            />
          </div>
          <div
            className={cn(
              `text-xl`,
              variant === "black" ? "text-white" : "text-black"
            )}
          >
            Learn more
          </div>
        </button>
      </div>
      {/* image */}
      <div>
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          width={210}
          height={170}
        />
      </div>
    </div>
  );
};

export default Card;
