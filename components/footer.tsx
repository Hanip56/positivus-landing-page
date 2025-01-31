"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Button from "./ui/button";

const Footer = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert(JSON.stringify(form));

    setForm({ email: "" });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-[30px] sm:p-[60px] bg-black-100 mt-[60px] rounded-t-[45px] text-white">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-4 gap-y-8 md:flex-row items-center justify-between">
        <Image
          src="/images/logo-positivus-white.svg"
          alt="logo positivus"
          className="w-44 lg:w-52 xl:w-auto xl:h-auto"
          width={220}
          height={56}
        />

        <div className="flex gap-6 text-sm lg:text-lg xl:text-xl">
          {/* navigation */}
          <ul className="flex flex-wrap justify-center items-center gap-y-4 [&>li>*]:px-3 xl:[&>li>*]:px-5 [&>li>*]:py-1 [&>li>*]:flex-shrink-0 [&>li>*]:underline">
            <li>
              <Link href="#" className="hover:opacity-80">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <a href="#">
            <Image
              className="hover:opacity-80 transition-opacity"
              src="/images/icon-linkedin.svg"
              alt="linkedin icon"
              width={30}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              className="hover:opacity-80 transition-opacity"
              src="/images/icon-facebook.svg"
              alt="linkedin icon"
              width={30}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              className="hover:opacity-80 transition-opacity"
              src="/images/icon-twitter.svg"
              alt="linkedin icon"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-[66px] mb-[50px]">
        <div className="flex-1">
          <h6 className="text-xl font-medium bg-main inline-block p-px px-1 text-black-100 rounded-md mb-[27px]">
            Contact us:
          </h6>
          <div className="space-y-5">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-[#292A32] rounded-[14px] px-6 py-6 sm:px-10 sm:py-[58px] flex flex-col lg:flex-row items-center gap-5 w-full md:w-fit"
        >
          <div className="flex flex-col gap-[5px] w-full lg:w-fit">
            <label htmlFor="email" className="text-base hidden">
              Email*
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="w-full rounded-[14px] border bg-transparent placeholder:text-white border-white py-[18px] px-[30px]"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <Button variant="green" className="flex-shrink-0 w-full lg:w-fit">
            Subscribe to news
          </Button>
        </form>
      </div>

      <div className="h-px w-full bg-white mb-[50px]" />

      <p>
        © 2023 Positivus. All Rights Reserved.
        <a href="#" className="underline ml-10 cursor-pointer">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default Footer;
