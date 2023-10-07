import React from "react";
import Link from "next/link";
import config from "@/config/config";

const SideText = () => {
  return (
    <div className="md:block hidden">
      <div className="absolute flex flex-row gap-4 vertical-rl bottom-5 left-48">
        {config.social.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className="hover:pb-2 transition-all duration-100 delay-75"
            >
              <item.icon className="hover:text-cyan-500" size={25} />
            </Link>
          );
        })}
      </div>
      <div className="absolute hover:pb-2 transition-all duration-100 delay-75 vertical-rl bottom-5 right-48">
        <Link href="" className="hover:text-cyan-500">
          {config.email}
        </Link>
      </div>
    </div>
  );
};

export default SideText;
