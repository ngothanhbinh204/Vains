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
    <section ref={sectionRef} className=" relative z-10 text-white">
      <div className="relative z-10 max-w-1440 px-4 md:px-6 md:pb-14 mx-auto h-auto flex flex-col">
        <div className="grid grid-cols-12 gap-y-4 gap-x-6 items-center">
          <div className="col-span-12 md:col-span-4">
            <div className="text-primary text-sm font-medium mb-2 tracking-wider">
              WHO WE ARE
            </div>
            <h2 className="text-2xl lg:text-[36px] font-bold mb-5 leading-tight">
              Meet the Founders
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 text-md leading-relaxed mb-5">
            This is the space to introduce the team and what makes it special.
            Describe the team culture and work philosophy. To help site visitors
            connect with the team, add details about team members' experience
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
