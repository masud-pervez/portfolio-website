import React from "react";
import Link from "next/link";
import config from "../../config/config";

const AboutSelf = () => {
  return (
    <section className="py-10" id="about">
      <div className="group my-2 flex items-center gap-3 py-3 text-lg font-bold text-gray-400">
        <span className="text-slate-200">About Myself</span>
        <span className="nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      </div>
      <p className="mb-4 text-justify text-gray-400">
        During the year 2020, I made a pivotal decision to embark on a career
        path in the field of software development. It gives me immense pleasure
        to state that I have been fortunate enough to have been part of two very
        diverse organizations- a fledgling startup and a colossal corporation.
        The opportunities that I have had so far have allowed me to hone my
        skills and showcase my expertise in developing software applications.
      </p>

      <p className="mb-4 text-justify text-gray-400">
        At present, I am fully dedicated to spearheading various projects and
        creating cutting-edge products for our esteemed client base at{" "}
        <Link
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href={config.CurrentCompany.link}
          target="_blank"
        >
          {config.CurrentCompany.name}
        </Link>
        . During my leisure time, I am passionately engaged in augmenting my
        knowledge about the latest technological advancements to stay up-to-date
        with the dynamic world we live in.
      </p>
      <p className="mb-4 text-justify text-gray-400">
        When {"I'm"} not sitting in front of my computer screen, I like to
        engage in physical activities such as playing{" "}
        <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
          cricket
        </span>{" "}
        and{" "}
        <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
          swimming
        </span>
        . These sports help me stay fit and active, while also giving me a
        chance to unwind and have some fun. In addition to sports, I also enjoy
        spending quality time with my loved ones, including my family and close
        friends. Whether {"we're"} having a barbecue, going out to eat, or just
        hanging out at home, being around people I care about always brings a
        smile to my face.
      </p>
    </section>
  );
};

export default AboutSelf;
