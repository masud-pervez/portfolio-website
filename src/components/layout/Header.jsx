"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const handleDownloadClick = () => {
    const resumeUrl =
      ("https://masud-pervez.vercel.app" || "https://localhost:3000") +
      "/resume.pdf";

    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur py-2">
      <nav className="container-fluid mx-auto flex px-5 justify-between items-center">
        <Link href="/">
          <Image src="/logo-light.png" height={45} width={45} alt="logo" />
        </Link>
        <button className="md:hidden block">
          <AiOutlineAlignRight size={30} />
        </button>
        <div className="hidden md:block">
          <ul className="inline-block m-0 p-0 ms-auto">
            <li className="inline-block ms-5">
              <code>
                <span className="text-info">01.</span>
                <Link
                  className={`${
                    pathname === "/about"
                      ? "text-info"
                      : "hover:text-info text-base-content"
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-info">02.</span>
                <Link
                  className={`${
                    pathname === "/experience"
                      ? "text-info"
                      : "hover:text-info text-base-content"
                  }`}
                  href="/experience"
                >
                  Experience
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-info">03.</span>
                <Link
                  className={`${
                    pathname === "/work"
                      ? "text-info"
                      : "hover:text-info text-base-content"
                  }`}
                  href="/work"
                >
                  Work
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-info">04.</span>
                <Link
                  className={`${
                    pathname === "/contact"
                      ? "text-info"
                      : "hover:text-info text-base-content"
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code onClick={handleDownloadClick} className="bn5">
                Resume
              </code>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
