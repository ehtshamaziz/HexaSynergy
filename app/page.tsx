import AboutSectionOne from "@/components/About/AboutSectionOne";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Features from "@/components/Features";
// import Hero from "@/components/Hero";
import Hero from "@/components/Hero2";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Services />
      <Approach />
      {/* <Features /> */}
      {/* <Brands /> */}
      <Testimonials />
      <Achievements />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
