import config from "@/config/config";
import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import projectData from "@/config/projectData";

const Project = () => {
  return (
    <section className="container mx-auto">
      <div className="my-20">
        <Link href="/" className="text-cyan-500 text-xl flex items-center">
          <BiLeftArrowAlt size={25} /> {config.name}
        </Link>
        <h1 className="text-4xl font-bold">All Peojects</h1>

        <div className="overflow-x-auto">
          <table className="table my-5">
            {/* head */}
            <thead className="sticky top-5 backdrop-blur-lg">
              <tr className="text-sm text-white">
                <th style={{ minWidth: "10%" }}>Year</th>
                <th style={{ minWidth: "20%" }}>Project</th>
                <th style={{ minWidth: "20%" }}>Made At</th>
                <th style={{ minWidth: "30%" }}>Built with</th>
                <th style={{ minWidth: "20%" }}>Link</th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.year}</td>
                    <td>{item.project}</td>
                    <td>{item.madeAt}</td>
                    <td>
                      {item.builtWith.map((item, idx) => (
                        <span
                          className="bg-cyan-50 border-2 border-cyan-300 text-cyan-700 me-2 p-1 rounded-md"
                          key={idx}
                        >
                          {item}
                        </span>
                      ))}
                    </td>
                    <td>
                      <Link
                        className="hover:text-cyan-500 hover:underline"
                        target="_blank"
                        href={item.link}
                      >
                        {item.link}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Project;
