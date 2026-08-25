"use client";
import Hero from "../components/Hero";
import ChristmasLightingSection from "../components/servicesection";
import ChristmasLightingServices from "../components/ChristmasLightingServices";
import HowWeWorkSection from "../components/HowWeWorkSection";
import RecentWorkMarquee from "../components/RecentWorkMarquee";
import ChristmasLightingMap from "../components/ChristmasLightingMap";
import Testimonials from "../components/TestimonialCard";
import FAQSection from "../components/FAQSection";
import GetQuoteFormAdvanced from "./GetQuoteForm";
import { useEffect, useState } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Christmas Light Installation Columbus, Ohio | Christmas Lights Over Columbus';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Serving Columbus With Stress-Free Holiday Lighting');
    }
    
    setIsClient(true);
  }, []);

  return (
    <>
      <Hero />
      <ChristmasLightingSection />
      <ChristmasLightingServices />
      <HowWeWorkSection />
      <RecentWorkMarquee />
      <ChristmasLightingMap />
      <Testimonials id="testimonials" />
      <FAQSection />
      <GetQuoteFormAdvanced id="freequote" />




    </>
  );
};

export default Home;