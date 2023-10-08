import React from "react";
import Link from "next/link";
import config from "@/config/config";

const SideText = () => {
  return (
    <div className="md:block hidden">
      <div className="absolute gamil-link flex flex-row gap-5 vertical-rl bottom-5 left-10">
        {config.social.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className="hover:-translate-y-2 transition-all duration-100 delay-75"
            >
              <item.icon className="hover:text-cyan-500" size={20} />
            </Link>
          );
        })}
      </div>
      <div className="absolute transition-all duration-100 delay-75 vertical-rl bottom-5 right-10">
        <div className="gamil-link flex items-center gap-5 ">
          <Link href="" className="hover:text-cyan-500 hover:-translate-y-2">
            {config.email}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideText;
