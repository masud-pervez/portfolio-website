import React from "react";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <section className="max-h-screen py-10" id="experience">
      <div className="group my-2 flex items-center gap-3 py-3 text-lg font-bold text-gray-400">
        <span className="text-slate-200">Experience</span>
        <span className="nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      </div>

      <div>
        <ul className="group/list">
          {[{}, {}, {}, {}, {}, {}].map((item, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid grid-cols-1 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <Link
                  href=""
                  className="col-span-6 flex rounded-md p-3 transition-all delay-75 duration-75 ease-linear hover:bg-slate-100 hover:shadow-md dark:hover:bg-slate-800"
                >
                  <div className="w-1/5">
                    <span className="text-slate-600 dark:text-slate-500 ">
                      2018 - Present
                    </span>
                  </div>
                  <div className="w-4/5">
                    <h3 className="-mt-1 inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Integrating Algolia Search with WordPress
                        <span className="inline-block">
                          Multisite
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
                    </h3>
                    <h2 className="my-2 text-lg text-slate-600 dark:text-slate-500">
                      Designetion
                    </h2>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, sit nihil deleniti distinctio culpa
                      voluptatibus sunt adipisci quidem nisi, ipsa eligendi?
                      Ducimus cumque necessitatibus eligendi ab voluptatem
                      voluptatum autem accusantium.
                    </p>
                    <div className="flex flex-wrap gap-5">
                      <ul
                        className="mt-2 flex flex-wrap"
                        aria-label="Technologies used:"
                      >
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Express
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Spotify API
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Heroku
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <Link
          className="group inline-flex items-center font-medium  leading-tight text-slate-200"
          aria-label="View Full Project Archive"
          href="/projects"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
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
        </Link>
      </div>
    </section>
  );
};

export default ExperienceSection;
