import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import ContentImage from "@/sections/Home/ContentImage";
import Image from "@/assets/images/bg_why.avif";
import ReadMoreButton from "@/components/ui/ReadMoreButton";
import CardNumber from "@/components/animations/CardNumber";
import heroVideo from "@/assets/images/video_company_ss.mp4";

gsap.registerPlugin(ScrollTrigger);

const WhyVains = () => {
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
    const stopPosition = textElement.getBoundingClientRect().width;

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
          //   markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" z-10 bg-black
      flex items-center box-border overflow-hidden flex-col md:h-full md:mb-0 md:pb-0 relative"
    >
      <div className="md:pb-0 md:p-8 w-full">
        <div className="relative z-10 max-w-1440 w-full px-4 md:px-6 mx-auto h-auto flex flex-col">
          <HeaderSection
            title="COMPANY"
            headline={
              <h1 className="text-3xl md:text-4xl lg:text-7xl max-w-10/12 font-helvetica-light leading-tight">
                Volaso in Numbers
              </h1>
            }
            triggerRef={triggerRef}
            lineRef={lineRef}
            textRef={textRef}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-9 mt-20">
            <CardNumber title="Employees" headline="247" theme="dark" />
            <CardNumber title="Core Teams" headline="5" theme="dark" />
            <CardNumber
              title="Partners Worldwide"
              headline="326"
              theme="dark"
            />
            <CardNumber title="Capital" headline="$200m" theme="dark" />
          </div>
        </div>
      </div>

      <div className="w-full h-full ">
        <video
          className=" w-full max-h-[70vh] h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>
    </section>
  );
};

export default WhyVains;
