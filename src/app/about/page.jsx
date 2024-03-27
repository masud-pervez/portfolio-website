/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import config from "../../config/config";
import appConfig from "../../config/config";
export default function about() {
  return (
    <>
      <CardContainer>
        <CardBody>
          <CardItem translateZ="50">Make things float in air</CardItem>
          <CardItem as="p" translateZ="60">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <ol className="group/list">
        {config.experience.map((item, idx) => (
          <li key={idx} className="mb-5">
            <CardContainer>
              <CardBody>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <CardItem>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label={item.date}
                    >
                      {item.date}
                    </header>
                  </CardItem>
                  <div className="z-10 sm:col-span-6">
                    <CardItem>
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <Link
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-300 focus-visible:text-emerald-300  group/link text-base"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              <span className="inline-block">
                                {item.company}
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
                        </div>
                        <div>
                          <CardItem
                            className="text-slate-500"
                            aria-hidden="true"
                          >
                            {item.designetion}
                          </CardItem>
                        </div>
                      </h3>
                    </CardItem>
                    <CardItem>
                      <p className="mt-2 text-sm leading-normal">
                        {item.description}
                      </p>
                    </CardItem>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {item.skill.map((item, idx) => (
                        <CardItem key={idx}>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-300 ">
                              {item}
                            </div>
                          </li>
                        </CardItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </li>
        ))}
      </ol>

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
                      <p className="mt-2 text-sm leading-normal">{item.desc}</p>
                    </CardItem>
                  </div>
                  <CardItem>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      width="200"
                      height="48"
                      data-nimg="1"
                      src={item.img}
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    />
                  </CardItem>
                </div>
              </li>
            </CardBody>
          </CardContainer>
        ))}
      </ul>
    </>
  );
}
