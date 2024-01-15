"use client";
import Link from "next/link";
import React, { useState } from "react";
import AboutSelf from "../components/about/AboutSelf";
import ExperienceSection from "../components/about/ExperienceSection";
import ProjectSection from "../components/about/ProjectSection";
import Typewriter from "typewriter-effect";
import { IoCloudDownloadOutline, IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import Tracker from "../components/ui/Tracker";
import config from "../config/config";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDownloadClick = () => {
    const resumeUrl = config.url + "/resume.pdf";
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <main>
      <section
        className="relative lg:overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="mx-auto container max-h-screen lg:w-3/5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 flex lg:max-h-screen flex-col justify-between py-10 lg:col-span-5">
              <div className="lg:text-start text-center">
                <Image
                  height={300}
                  width={300}
                  className="inline-block h-60 w-60 rounded-full border-4 border-teal-500 object-cover"
                  src="/masud-pervez.png"
                  alt=""
                />
                <h1 className="mx-0 mt-4 text-3xl font-bold text-slate-800 dark:text-[#ccd6f6]">
                  {config.name}
                </h1>
                <div className="my-2 bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent dark:from-green-400 md:text-xl">
                  <Typewriter
                    options={{
                      strings: [
                        config?.introdata.animated.first,
                        config?.introdata.animated.second,
                        config?.introdata.animated.third,
                        config?.introdata.animated.four,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 5,
                    }}
                  />
                </div>
                <p className="lg:w-4/5 text-gray-400">{config.description}</p>

                <ul className="mt-5 w-max">
                  <li>
                    <a
                      className="active group flex items-center py-3"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="my-3 flex gap-4">
                  {config?.social.map((item, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        className="text-slate-700 transition-all delay-75 duration-100 ease-linear hover:-translate-y-1 dark:text-slate-400"
                      >
                        <item.icon size={20} />
                      </Link>
                    );
                  })}
                </div>
                <code
                  onClick={handleDownloadClick}
                  className="bn5 flex items-center justify-center gap-2"
                >
                  <IoCloudDownloadOutline />
                  Download CV
                </code>
              </div>
            </div>
            <main className="col-span-12 max-h-screen lg:overflow-auto scroll-smooth lg:col-span-7">
              <AboutSelf />
              <ExperienceSection />
            </main>
          </div>
          <Tracker position={position} />
          <div className="absolute bottom-44 left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:-left-20 lg:bottom-24 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:animate-pulse lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
          <div className="absolute top-10 -right-10 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-l from-purple-600 to-purple-400 opacity-30 blur-3xl filter dark:block lg:-right-20 lg:bottom-24 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:animate-pulse lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
