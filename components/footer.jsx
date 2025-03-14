import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link href="/">
            <Image
              src={"/carvAi.png"}
              alt="Logo"
              width={250}
              height={60}
              className="h-12 py-1 w-auto object-contain"
            />
          </Link>
          <p className="w-full md:2/3 text-gray-600">
            Boost your career with tailored advice, interview coaching, and
            AI-driven tools for job success.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Build Resume</li>
            <li>Give Assessment</li>
            <li>Create Cover Letter</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9821169378</li>
            <li>anjany.pandey06@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ carvAI.com- All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
