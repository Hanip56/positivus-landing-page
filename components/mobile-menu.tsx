import React from "react";
import Button from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  handleClose: () => void;
};

const MobileMenu = ({ handleClose }: Props) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 inset-0 bg-black-100 z-50 p-10">
      <header className="flex justify-end">
        <button onClick={handleClose}>
          <Image
            src="/images/icon-cross.svg"
            alt="cross icon"
            width={50}
            height={50}
          />
        </button>
      </header>

      <main className="flex flex-col items-center text-center gap-12 text-2xl sm:text-3xl text-white mt-12">
        {/* navigation */}
        <ul className="flex flex-col gap-8 items-center [&>li>*]:px-2 [&>li>*]:py-1 ">
          <li>
            <Link href="#" className="hover:underline">
              About us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Use Cases
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
        <Button
          variant="outline"
          className="border-white text-white text-2xl sm:text-3xl"
        >
          Request a quote
        </Button>
      </main>
    </div>
  );
};

export default MobileMenu;
