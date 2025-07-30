import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeadline = ({
  title,
  headline,
  theme = "dark",
  headlineAnimation = "slideUp", // slideUp, fadeIn, scale
  titleAnimation = "wipeRight", // wipeRight, wipeLeft, slideDown
}) => {
  const lineRef = useRef(null);
  const headlineRef = useRef(null);
  const titleRef = useRef(null);
  const titleWipeRef = useRef(null);
  const containerRef = useRef(null);

  const isLight = theme === "light";
  const lineColor = isLight ? "bg-black" : "bg-white";
  const textColor = isLight ? "text-black" : "text-white";
  const backGroundLine = isLight ? "bg-gray-200" : "bg-gray-500";
  const wipeColor = isLight ? "bg-white" : "bg-black";

  useEffect(() => {
    const lineElement = lineRef.current;
    const headlineElement = headlineRef.current;
    const titleElement = titleRef.current;
    const titleWipeElement = titleWipeRef.current;
    const containerElement = containerRef.current;

    if (!containerElement) return;

    // Create main timeline
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Headline animations
    if (headlineElement) {
      const headlineAnimations = {
        slideUp: () => {
          gsap.set(headlineElement, { y: 100, opacity: 0 });
          return gsap.to(headlineElement, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out",
          });
        },
        fadeIn: () => {
          gsap.set(headlineElement, { opacity: 0, scale: 0.8 });
          return gsap.to(headlineElement, {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.7)",
          });
        },
        scale: () => {
          gsap.set(headlineElement, { scale: 0, rotation: -5 });
          return gsap.to(headlineElement, {
            duration: 1.2,
            scale: 1,
            rotation: 0,
            ease: "elastic.out(1, 0.5)",
          });
        },
      };

      const selectedHeadlineAnim =
        headlineAnimations[headlineAnimation] || headlineAnimations.slideUp;
      mainTL.add(selectedHeadlineAnim(), 0);
    }

    // 2. Line animation
    if (lineElement && headlineElement) {
      const stopPosition = headlineElement.getBoundingClientRect().width;

      gsap.fromTo(
        lineElement,
        { width: 0 },
        {
          width: stopPosition,
          ease: "none",
          scrollTrigger: {
            trigger: lineElement,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    }

    // 3. Title reveal animations
    if (titleElement && titleWipeElement) {
      const titleAnimations = {
        wipeRight: () => {
          gsap.set(titleWipeElement, { x: "0%", scaleX: 1 });
          return gsap.to(titleWipeElement, {
            duration: 1.5,
            x: "100%",
            ease: "power2.inOut",
          });
        },
        wipeLeft: () => {
          gsap.set(titleWipeElement, {
            x: "0%",
            scaleX: 1,
            transformOrigin: "right center",
          });
          return gsap.to(titleWipeElement, {
            duration: 1.2,
            x: "-100%",
            ease: "power2.inOut",
          });
        },
        slideDown: () => {
          gsap.set(titleElement, { y: -50, opacity: 0 });
          gsap.set(titleWipeElement, { display: "none" });
          return gsap.to(titleElement, {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out",
          });
        },
      };

      const selectedTitleAnim =
        titleAnimations[titleAnimation] || titleAnimations.wipeRight;
      mainTL.add(selectedTitleAnim(), 0.3);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mainTL.kill();
    };
  }, [headlineAnimation, titleAnimation]);

  return (
    <div ref={containerRef} className={`animated-headline ${textColor}`}>
      {headline && (
        <div className="headline-container overflow-hidden">
          <div
            ref={headlineRef}
            className="text-4xl lg:text-6xl font-bold inline-block whitespace-nowrap w-fit"
          >
            {headline}
          </div>
        </div>
      )}

      <div className="overflow-hidden relative py-6">
        <div className={`h-[1px] relative ${backGroundLine}`}>
          <div
            ref={lineRef}
            className={`h-[1px] absolute top-0 left-0 z-10 ${lineColor}`}
            style={{ width: 0 }}
          />
        </div>
      </div>

      {title && (
        <div
          className={`box-title text-md lg:text-xl font-grotesk mb-4 lg:mb-6 ${textColor} relative overflow-hidden`}
        >
          <p ref={titleRef} className="w-fit text-c2c2 uppercase relative z-10">
            {title}
          </p>
          {/* Wipe overlay - chỉ hiển thị khi cần */}
          {(titleAnimation === "wipeRight" ||
            titleAnimation === "wipeLeft") && (
            <div
              ref={titleWipeRef}
              className={`absolute top-0 left-0 w-full h-full ${wipeColor} z-20`}
              style={{
                transformOrigin:
                  titleAnimation === "wipeLeft"
                    ? "right center"
                    : "left center",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AnimatedHeadline;
