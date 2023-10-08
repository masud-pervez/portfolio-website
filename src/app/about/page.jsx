"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "@/components/layout/Header";
import { BiArrowToRight } from "react-icons/bi";
import Image from "next/image";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/${name}.svg${wrap ? ")" : ""}`;

export default function About() {
  const parallax = useRef(null);

  return (
    <main>
      <Header />
      <div className="bg-base-200">
        <Parallax ref={parallax} pages={2}>
          <ParallaxLayer offset={1} speed={1} className="bg-info opacity-20" />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            className="flex items-center justify-center"
          >
            <div className="h-96 grid grid-cols-2 gap-10 items-center lg:w-3/5 w-full">
              <div className="md:col-span-1 col-span-2 flex md:items-center items-center justify-center">
                <Image
                  className="bg-gradient-to-tr from-primary to-info rounded-md"
                  src="/masud.png"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="md:col-span-1 col-span-2 px-5 md:px-0">
                <code className="text-3xl text-base-content line-arrow font-bold">
                  About Me
                </code>
                <p className="text-lg my-3">
                  Hello! My name is Masud Pervez and I enjoy creating things
                  that live on the internet. My interest in web development
                  started back in 2020.
                </p>
                <p className="text-lg my-3">
                  Hello! My name is Masud Pervez and I enjoy creating things
                  that live on the internet. My interest in web development
                  started back in 2020.
                </p>
                <p className="text-lg my-3">
                  Here are a few technologies I’ve been working with recently:
                  <div className="flex items-center gap-x-10 my-3">
                    <ul className="">
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">JavaScript (ES6+)</code>
                      </li>
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">React</code>
                      </li>
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">Node.js</code>
                      </li>
                    </ul>
                    <ul className="">
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">TypeScript</code>
                      </li>
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">PgAdmin</code>
                      </li>
                      <li className="about-icon">
                        <BiArrowToRight />
                        <code className="text-sm">Nest.js</code>
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(0)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={url("bash")} style={{ width: "40%" }} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
