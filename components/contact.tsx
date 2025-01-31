"use client";

import Image from "next/image";
import Button from "./ui/button";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    option: "sayHi",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert(JSON.stringify(form));

    setForm({
      option: "sayHi",
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-40">
      {/* header */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <h2 className="inline-block bg-main p-3 rounded-lg">Contact Us</h2>
        <p className="max-w-xs">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </header>
      <main className="bg-gray-10 p-[30px] sm:p-[60px] xl:px-[100px] rounded-[45px] my-10 md:my-20 relative overflow-hidden">
        {/* bg */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/images/contact-illustration.svg"
            alt="Illustration"
            width={692}
            height={648}
            className="ml-[47%]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-10 max-w-[556px]"
        >
          <div className="flex items-center gap-6 xl:gap-[35px]">
            <label className="flex items-center gap-2 xl:gap-[14px] cursor-pointer">
              <input
                type="radio"
                name="option"
                className="peer hidden"
                value="sayHi"
                checked={form.option === "sayHi"}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, option: e.target.value }))
                }
              />
              <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center peer-checked:[&>*]:opacity-100">
                <div className="w-4 h-4 bg-main rounded-full opacity-0 transition"></div>
              </div>
              <span>Say Hi</span>
            </label>
            <label className="flex items-center gap-2 xl:gap-[14px] cursor-pointer">
              <input
                type="radio"
                name="option"
                className="peer hidden"
                value="getAQuote"
                checked={form.option === "getAQuote"}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, option: e.target.value }))
                }
              />
              <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center peer-checked:[&>*]:opacity-100">
                <div className="w-4 h-4 bg-main rounded-full opacity-0 transition"></div>
              </div>
              <span>Get a Quote</span>
            </label>
          </div>
          <div className="space-y-[25px]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="name" className="text-base">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="rounded-[14px] border border-black py-[18px] px-[30px]"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="email" className="text-base">
                Email*
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="rounded-[14px] border border-black py-[18px] px-[30px]"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="message" className="text-base">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="rounded-[14px] border border-black py-[18px] px-[30px] min-h-[190px]"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                required
              />
            </div>
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
