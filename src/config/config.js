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
};

export default config;
