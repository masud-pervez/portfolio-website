import config from "@/config/config";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
