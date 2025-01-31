import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <CallToActionSection />
      {/*
      <ProjectSection />
      */}
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
