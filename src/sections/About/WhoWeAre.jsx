import FeatureCard from "@/sections/About/FeatureCard";
import Title from "@/sections/Shared/Title";

// import realTimeInfoImage from "@/assets/images/img_card.avif";
// import advancedDataSecurityImage from "@/assets/images/img_card.avif";
import TeamGridSlider from "@/sections/About/TeamGridSlider";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
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
          title="WHO WE ARE"
          headline={
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-helvetica-light leading-tight">
              Meet the Founders
            </h1>
          }
          triggerRef={triggerRef}
          lineRef={lineRef}
          textRef={textRef}
        />
        <div className="mt-12 md:mt-14 lg:mt-20 max-w-full md:max-w-2/6 ml-auto">
          <p className="text-black leading-[1.5] text-md">
            This is the space to introduce the team and what makes it special.
            Describe the team culture and work philosophy. To help site visitors
            connect with the team, add details about team members’ experience
            and skills.
          </p>
        </div>
      </div>
      <div className="min-h-screen max-w-1440 mx-auto flex items-center justify-center p-4 sm:p-6">
        <TeamGridSlider></TeamGridSlider>
      </div>
    </section>
  );
};

export default WhoWeAre;
