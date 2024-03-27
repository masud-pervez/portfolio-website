import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import config from "../config/config";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import FloatingNav from "../components/ui/floating-navbar";

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: ["Developer", "Frontend", "Backend", "Portfolio", "Web Developer"],
  authors: [
    {
      name: config.author.name,
      url: config.author.website,
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="z-10 flex flex-col min-h-screen bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          <main className="flex-grow relative">
            <FloatingNav navItems={navItems} />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
