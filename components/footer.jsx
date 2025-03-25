import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
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
          <p className="w-full md:2/3 text-gray-600 mt-2">
            Boost your career with tailored advice, interview coaching, and
            AI-driven tools for job success.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/resume">Build resume</Link>
            </li>
            <li>
              <Link href="/interview">Give Assessments</Link>
            </li>
            <li>
              <Link href="/ai-cover-letter">Create Cover Letter</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9821169378</li>
            <li>
              <a href="mailto:anjany.pandey06@gmail.com">
                anjany.pandey06@gmail.com
              </a>
            </li>
            <div className="flex flex-row gap-4 mt-2">
              <li>
                <Link href="https://github.com/anjany06">
                  <GithubIcon />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/anjany-pandey-927169294/">
                  <LinkedinIcon />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/anjany06">
                  <Twitter />
                </Link>
              </li>
            </div>
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
