import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";

const Header = () => {
  return (
    <header className="backdrop-blur py-2">
      <nav className="container mx-auto sticky top-0 flex md:px-0 px-5 justify-between items-center">
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
                <span className="text-color">01.</span>
                <Link
                  className="hover:text-cyan-500 text-slate-200"
                  href="/about"
                >
                  About
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-color">02.</span>
                <Link
                  className="hover:text-cyan-500 text-slate-200"
                  href="/about"
                >
                  Experience
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-color">03.</span>
                <Link
                  className="hover:text-cyan-500 text-slate-200"
                  href="/about"
                >
                  Work
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code>
                <span className="text-color">04.</span>
                <Link
                  className="hover:text-cyan-500 text-slate-200"
                  href="/about"
                >
                  Contact
                </Link>
              </code>
            </li>
            <li className="inline-block ms-5">
              <code className="outline rounded outline-cyan-500 text-cyan-500 p-2 ">
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
