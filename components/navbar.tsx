"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {showMobileMenu && (
        <MobileMenu handleClose={() => setShowMobileMenu(false)} />
      )}
      <div className="w-[100%] py-6 md:py-10 lg:py-12 xl:py-14">
        <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between">
          <Image
            src="/images/logo-positivus-black.svg"
            alt="logo positivus"
            className="w-32 sm:w-40 md:w-44 lg:w-52 xl:w-auto xl:h-auto"
            width={220}
            height={56}
          />

          <div className="hidden lg:flex gap-2 lg:gap-4 xl:gap-6 lg:text-lg xl:text-xl">
            {/* navigation */}
            <ul className="flex items-center [&>li>*]:px-2 lg:[&>li>*]:px-4 xl:[&>li>*]:px-5 [&>li>*]:py-1 ">
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
            <Button variant="outline">Request a quote</Button>
          </div>

          {/* mobile navbar */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className="block lg:hidden hover:opacity-80"
          >
            <Image
              src="/images/icon-menu.svg"
              alt="menu icon"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
