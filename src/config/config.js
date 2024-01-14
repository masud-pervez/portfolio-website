import { AiFillFacebook } from "react-icons/ai";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3900";

const config = {
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
};

export default config;
