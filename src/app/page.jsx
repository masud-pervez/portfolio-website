import config from "@/config/config";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto lg:min-h-[75vh]  min-h-[90vh] flex items-center md:w-3/5 w-full md:px-0 px-5">
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
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <Link href={config.CurrentCompany.link} className="text-color">
            {config.CurrentCompany.name}
          </Link>
          .
        </p>

        <button className="outline rounded outline-cyan-500 text-cyan-500 p-2 ">
          Check Out My Projects
        </button>
      </div>
      <div className="absolute flex flex-row gap-4 vertical-rl bottom-5 left-48">
        {config.social.map((item, idx) => {
          return (
            <Link
              className="hover:pb-2 transition-all duration-100 delay-75"
              href={item.link}
              key={idx}
            >
              <item.icon className="hover:text-cyan-500" size={25} />
            </Link>
          );
        })}
      </div>
      <div className="absolute cursor-pointer hover:pb-2 transition-all duration-100 delay-75 vertical-rl bottom-5 right-48">
        <code className="hover:text-cyan-500">{config.email}</code>
      </div>
    </div>
  );
};

export default Home;
