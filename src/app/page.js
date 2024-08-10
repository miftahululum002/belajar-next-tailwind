import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolios from "./components/Portfolios";
import Clients from "./components/Clients";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolios />
      <Clients />
      <Blogs />
      <Contact />
      <Footer />
      <ToTop />
    </>
  );
}
