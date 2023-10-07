import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3900";

const config = {
  name: "Masud Pervez",
  title: "Masud Pervez",
  description: "Masud Pervez",
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
  email: "masudpervez431@gmail.com",
  CurrentCompany: {
    name: "Semicolon It solution",
    link: "https://semicolonit.com/",
  },
  social: [
    {
      name: "Github",
      icon: AiFillGithub,
      link: "https://github.com/masud-pervez",
    },
    {
      name: "Linkedin",
      icon: AiFillLinkedin,
      link: "https://www.linkedin.com/in/masud-pervez-/",
    },
    {
      name: "Facebook",
      icon: AiFillFacebook,
      link: "https://www.facebook.com/masud.pervez.31337",
    },
    {
      name: "Instagram",
      icon: AiFillInstagram,
      link: "https://www.instagram.com/_masud_pervez_/",
    },
  ],
};

export default config;
