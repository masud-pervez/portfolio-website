/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import appConfig from "../config/config";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import AboutSelf from "../components/home/AboutSelf";
import ExperienceSection from "../components/home/ExperienceSection";
import { useParams, usePathname } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDownloadClick = () => {
    const resumeUrl = appConfig.url + "/resume.pdf";
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="relative" onMouseMove={handleMouseMove}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>

        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">{appConfig.name}</a>
              </h1>
              <div className="my-2 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent from-emerald-400 to-blue-700 md:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      appConfig?.introdata.animated.first,
                      appConfig?.introdata.animated.second,
                      appConfig?.introdata.animated.third,
                      appConfig?.introdata.animated.four,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 5,
                  }}
                />
              </div>
              <p className="mt-4 max-w-xs leading-normal">
                {appConfig.description}
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3 active"
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
              </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              {appConfig?.social.map((item, idx) => (
                <li key={idx} className="mr-5 text-xs">
                  <Link
                    className="block hover:text-slate-200"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon size={25} />
                  </Link>
                </li>
              ))}
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSelf />
            <ExperienceSection />

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="group my-2 flex items-center gap-3 py-3 text-lg font-bold text-gray-300/80">
                <span className="text-slate-200">Projects</span>
                <span className="nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              </div>
              <div>
                <ul className="group/list">
                  {appConfig.projects.map((item, idx) => (
                    <CardContainer key={idx}>
                      <CardBody>
                        <li className="mb-12">
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <CardItem>
                                <h3>
                                  <Link
                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-300 focus-visible:text-emerald-300  group/link text-base"
                                    href={item.link || "/"}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                      <span className="inline-block">
                                        {item.name}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </h3>
                              </CardItem>
                              <CardItem>
                                <p className="mt-2 text-sm leading-normal">
                                  {item.desc}
                                </p>
                              </CardItem>
                            </div>
                            <CardItem>
                              <img
                                alt="Build a Spotify Connected App Newline course marketing card"
                                width="200"
                                height="48"
                                data-nimg="1"
                                src={item.img}
                                className="w-20 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                              />
                            </CardItem>
                          </div>
                        </li>
                      </CardBody>
                    </CardContainer>
                  ))}
                </ul>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center  leading-tight  font-semibold text-slate-200 group"
                    aria-label="View Full Project Archive"
                    href="/archive"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-emerald-300 motion-reduce:transition-none">
                        View Full Project{" "}
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-emerald-300 motion-reduce:transition-none">
                          Archive
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="blogs"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Blog posts"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Blogs
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {appConfig.blogs.map((item, idx) => {
                    return (
                      <CardContainer key={idx}>
                        <CardBody>
                          <li className="mb-12">
                            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                              <img
                                alt="Telescope"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                src={item.img}
                                className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                // style="color:transparent"
                              />
                              <div className="z-10 col-span-6">
                                <CardItem>
                                  <p className="-mt-1 text-sm font-semibold leading-6">
                                    {item.date}
                                  </p>
                                </CardItem>
                                <CardItem>
                                  <h3 className="-mt-1">
                                    <Link
                                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-300 focus-visible:text-emerald-300  group/link text-base"
                                      target="_blank"
                                      href={item.link || "/"}
                                      rel="noreferrer noopener"
                                      aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
                                    >
                                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                      <span>
                                        {item.title}
                                        <span className="inline-block">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                              clipRule="evenodd"
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </Link>
                                  </h3>
                                </CardItem>
                                <CardItem>
                                  <p className="mt-2 text-sm leading-normal">
                                    {item.desc}
                                  </p>
                                </CardItem>
                              </div>
                            </div>
                          </li>
                        </CardBody>
                      </CardContainer>
                    );
                  })}
                </ul>
              </div>
            </section>
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in{" "}
                <a
                  href="https://www.figma.com/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Figma (opens in a new tab)"
                >
                  Figma
                </a>{" "}
                and coded in
                <a
                  href="https://code.visualstudio.com/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visual Studio Code (opens in a new tab)"
                >
                  Visual Studio Code
                </a>
                by yours truly. Built with{" "}
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Next.js (opens in a new tab)"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Tailwind CSS (opens in a new tab)"
                >
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a
                  href="https://vercel.com/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Vercel (opens in a new tab)"
                >
                  Vercel
                </a>
                . All text is set in the{" "}
                <a
                  href="https://rsms.me/inter/"
                  className="font-medium text-slate-400 hover:text-emerald-300 focus-visible:text-emerald-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Inter (opens in a new tab)"
                >
                  Inter
                </a>{" "}
                typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Home;
