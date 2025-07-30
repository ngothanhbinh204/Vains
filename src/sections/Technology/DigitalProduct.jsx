import FeatureCard from "@/sections/Technology/FeatureCard";

import realTimeInfoImage from "@/assets/images/img_card.avif";
import advancedDataSecurityImage from "@/assets/images/img_card.avif";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import CarGrid from "@/sections/Technology/CardGrid";
gsap.registerPlugin(ScrollTrigger);

const DigitalProduct = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const lineElement = lineRef.current;

    if (!textElement || !lineElement || !sectionRef.current) return;

    textElement.style.display = "inline-block";
    textElement.style.whiteSpace = "nowrap";
    const stopPosition = textElement.offsetWidth;

    gsap.fromTo(
      lineElement,
      { width: 0 },
      {
        width: stopPosition,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className=" bg-white relative z-10">
      <div className="relative z-10 max-w-1440 px-4 md:px-6 md:pb-14 mx-auto h-auto flex flex-col">
        <HeaderSection
          theme="light"
          title="THE VOLASO DIGITAL PRODUCTS"
          headline={
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-helvetica-light leading-tight">
              Seamless User Experience
            </h1>
          }
          triggerRef={triggerRef}
          lineRef={lineRef}
          textRef={textRef}
        />
        <div className="mt-12 md:mt-14 lg:mt-20 max-w-full md:max-w-2/6 ml-auto">
          <p className="text-black leading-[1.5] text-md">
            Engineered to drive autonomously, the Volaso delivery robot uses
            Perception Enabled Sensors to make decisions with environmental
            awareness, efficiency and safety.
          </p>
        </div>
      </div>
      <div className="min-h-screen max-w-1440 mx-auto flex items-center justify-center p-4 sm:p-6">
        <div className="flex flex-col gap-10 md:gap-y-10 lg:gap-y-16">
          <FeatureCard
            title="ADVANCED DATA SECURITY"
            description="This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase."
            imageUrl={advancedDataSecurityImage}
            imageAlt="Woman smiling with a package, representing data security"
            imagePosition="left"
          />
          <FeatureCard
            title="REAL-TIME INFORMATION"
            description="This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase."
            imageUrl={realTimeInfoImage}
            imageAlt="Real-time information display on a phone"
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;
