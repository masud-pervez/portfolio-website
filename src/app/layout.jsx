import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import config from "../config/config";

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
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="z-10 flex flex-col min-h-screen">
          <main className="flex-grow relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
