import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import CapabilityBand from "@/components/CapabilityBand";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CapabilityBand />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
