import Brands from "@/components/brands";
import CaseStudies from "@/components/case-studies";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Process from "@/components/process";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Cta />
      <CaseStudies />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
