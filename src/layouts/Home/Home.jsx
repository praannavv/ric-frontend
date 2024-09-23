// // HeroSection.js
// import React from "react";
// import { Typography, Input, Button } from "@material-tailwind/react";
// import {
//   RectangleStackIcon,
//   UserCircleIcon,
//   CommandLineIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/24/solid";
// import HeroSection from "../../components/HomePage/HeroSection";
// import WhatWeDo from "../../components/HomePage/WhatWeDo";
// import Feedback from "../../components/HomePage/Feedbacks";
// import Feature from "../../components/HomePage/Feature";
// import DetailedFeatures from "../../components/HomePage/DetailedFeatures";
// import FAQSection from "../../components/HomePage/FAQSection";
// import ContactUs from "../../components/HomePage/ContactUs";

// const Home = () => {
//   return (
//     <>
//       <HeroSection />
//       <WhatWeDo />
//       <Feature />
//       <Feedback />
//       <DetailedFeatures />
//       <FAQSection />
//       <ContactUs />
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../../components/HomePage/HeroSection";
import WhatWeDo from "../../components/HomePage/WhatWeDo";
import Feedback from "../../components/HomePage/Feedbacks";
import Feature from "../../components/HomePage/Feature";
import DetailedFeatures from "../../components/HomePage/DetailedFeatures";
import FAQSection from "../../components/HomePage/FAQSection";
import ContactUs from "../../components/HomePage/ContactUs";

const Home = () => {
  
  const heroRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const featureRef = useRef(null);
  const feedbackRef = useRef(null);
  const detailedFeaturesRef = useRef(null);
  const faqRef = useRef(null);
  const contactUsRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* The sections wrapped with their respective refs */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={whatWeDoRef}>
        <WhatWeDo />
      </div>
      <div ref={featureRef}>
        <Feature />
      </div>
      <div ref={feedbackRef}>
        <Feedback />
      </div>
      <div ref={detailedFeaturesRef}>
        <DetailedFeatures />
      </div>
      <div ref={faqRef}>
        <FAQSection />
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
