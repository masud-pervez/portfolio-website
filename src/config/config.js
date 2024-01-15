import { AiFillFacebook } from "react-icons/ai";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3900";

const appConfig = {
  name: "Masud Pervez",
  title: "Masud Pervez",
  description: "Turning Code into Creative Conquests: Your Web, Our Expertise.",
  url: siteUrl,
  apiBaseUrl,
  ogImage: `${siteUrl}/opengraph-image`,
  author: {
    name: "Masud Pervez",
    website: "https://masud-pervez.vercel.app/",
  },
  links: {
    linkedIn: "https://www.linkedin.com/in/masud-pervez-/",
    github: "https://github.com/masud-pervez",
  },
  introdata: {
    animated: {
      first: "Software Engineer",
      second: "Competitive Programmer",
      third: "UI/UX Designer",
      four: "Web Developer",
    },
  },
  email: "masudpervez431@gmail.com",
  CurrentCompany: {
    name: "Semicolon It solution",
    link: "https://semicolonit.com/",
  },
  social: [
    {
      name: "Github",
      icon: FiGithub,
      link: "https://github.com/masud-pervez",
    },
    {
      name: "Linkedin",
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/masud-pervez-/",
    },
    {
      name: "Facebook",
      icon: AiFillFacebook,
      link: "https://www.facebook.com/masud.pervez.31337",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      link: "https://www.instagram.com/_masud_pervez_/",
    },
  ],
  experience: [
    {
      company: "Semicolon It Solutions",
      link: "https://semicolonit.com/",
      date: "May 2022 - Present",
      designetion: "Web Developer",
      description: `Write effective, well-tested and readable code in Node.js and React.js. Collaborate with other engineers in an agile cross-functional team to ensure successful completion of work.`,
      skill: [
        "React js",
        "Redux",
        "Vite",
        "React Native",
        "Next js",
        "Nest Js",
        "PostgreSQL",
      ],
    },
    {
      company: "Semicolon It Solutions",
      link: "https://semicolonit.com/",
      date: "Nov 2021 - Apr 2022",
      designetion: "Internship",
      description: `A solid work ethic .A collaborative work personality. Possesses
      problem-solving, analytical and logical skills.`,
      skill: [
        "HTML",
        "CSS",
        "Javascript",
        "Tailwind Css",
        "Bootstrap",
        "MongoDB",
      ],
    },
  ],
  projects: [
    {
      name: "Inventory Management System",
      link: "http://74.48.84.166:3000/#/dashboard",
      img: "/project/inventory.png",
      desc: `The primary objective of an Inventory Management System is to ensure that a company maintains optimal levels of inventory. This involves ensuring that there is sufficient stock on hand to meet customer demand while minimizing excess or obsolete inventory that could lead to capital being tied up.`,
    },
    {
      name: "Office ERP Management System",
      link: "https://office-linker.vercel.app",
      img: "/project/office.jpeg",
      desc: `ERP systems are typically used to integrate and manage core business
      functions such as finance, human resources, supply chain management,
      project management, and more. These systems provide a centralized
      platform for data and process management, offering real-time visibility
      into an organization's operations and facilitating data-driven`,
    },
    {
      name: "School Management System",
      link: "http://74.48.84.166:3000/#/dashboard",
      img: "/project/school.jpeg",
      desc: `These systems are used to manage various aspects of school operations,
      including student information, staff management, financial management,
      and communication.`,
    },
  ],
};

export default appConfig;
