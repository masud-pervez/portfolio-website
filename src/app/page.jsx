import React from "react";
import Link from "next/link";

import config from "../config/config";
import Header from "../components/layout/Header";
import SideText from "../components/ui/SideText";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container mx-auto lg:min-h-[80vh]  min-h-[90vh] flex items-center md:w-3/5 w-full md:px-0 px-5">
        <div>
          <code className="md:text-2xl text-xl text-color">Hi, my name is</code>
          <h1 className="text-[#ccd6f6] lg:text-7xl md:text-5xl text-3xl my-5 font-bold">
            {config.name}
          </h1>
          <h2 className="lg:text-6xl md:text-4xl text-2xl">
            I build things for the web.
          </h2>
          <p className="my-5 lg:w-3/5 w-full">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <Link href={config.CurrentCompany.link} className="text-color">
              {config.CurrentCompany.name}
            </Link>
            .
          </p>

          <Link href="/project">
            <button className="bn5">Check Out My Projects</button>
          </Link>
        </div>
        <SideText />
      </div>
    </main>
  );
};

export default Home;
