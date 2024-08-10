import { Inter } from "next/font/google";
import "./style.css";
import Header from "./components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belajar UI with Next JS and Tailwind CSS",
  description: "Belajar UI with Next JS and Tailwind CSS by Miftahul Ulum",
  author: "Miftahul Ulum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Header />
        <Script src="/js/script.js" />
      </body>
    </html>
  );
}
