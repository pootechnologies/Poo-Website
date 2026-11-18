import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface-canvas min-h-[calc(100vh-20rem)]">
        <Hero />
        <Services />
        <Industries />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
