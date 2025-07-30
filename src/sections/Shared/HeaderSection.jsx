import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const HeaderSection = ({
  title,
  headline,
  triggerRef,
  lineRef,
  textRef,
  theme = "dark",
  animationType = "flipIn", // flipIn, fadeUp, typewriter, wave, elastic
}) => {
  const headlineRef = useRef(null);
  const isLight = theme === "light";
  const lineColor = isLight ? "bg-black" : "bg-white";
  const textColor = isLight ? "text-black" : "text-white";
  const backGroundLine = isLight ? "bg-gray-200" : "bg-gray-500";

  useEffect(() => {
    if (headlineRef.current) {
      // Create SplitText instance
      const splitText = new SplitText(headlineRef.current, {
        type: "chars,words,lines",
        charsClass: "char",
        wordsClass: "word",
        linesClass: "line",
      });

      // Animation configurations
      const animations = {
        flipIn: () => {
          gsap.set(splitText.chars, {
            opacity: 0,
            y: 100,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
          });

          return gsap.to(splitText.chars, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: {
              amount: 0.8,
              from: "start",
            },
            ease: "back.out(1.7)",
          });
        },

        fadeUp: () => {
          gsap.set(splitText.chars, {
            opacity: 0,
            y: 50,
            scale: 0.8,
          });

          return gsap.to(splitText.chars, {
            duration: 0.6,
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: {
              amount: 0.6,
              from: "start",
            },
            ease: "power2.out",
          });
        },

        typewriter: () => {
          gsap.set(splitText.chars, {
            opacity: 0,
          });

          return gsap.to(splitText.chars, {
            duration: 0.05,
            opacity: 1,
            stagger: {
              amount: 2,
              from: "start",
            },
            ease: "none",
          });
        },

        wave: () => {
          gsap.set(splitText.chars, {
            opacity: 0,
            y: 60,
            rotation: 45,
          });

          return gsap.to(splitText.chars, {
            duration: 0.7,
            opacity: 1,
            y: 0,
            rotation: 0,
            stagger: {
              amount: 1.2,
              from: "start",
              ease: "sine.inOut",
            },
            ease: "elastic.out(1, 0.3)",
          });
        },

        elastic: () => {
          gsap.set(splitText.chars, {
            opacity: 0,
            scale: 0,
            rotation: 180,
          });

          return gsap.to(splitText.chars, {
            duration: 1,
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: {
              amount: 0.8,
              from: "random",
            },
            ease: "elastic.out(1, 0.5)",
          });
        },

        lines: () => {
          gsap.set(splitText.lines, {
            opacity: 0,
            y: 100,
            skewY: 7,
          });

          return gsap.to(splitText.lines, {
            duration: 1,
            opacity: 1,
            y: 0,
            skewY: 0,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      };

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef?.current || headlineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Apply selected animation
      const selectedAnimation = animations[animationType] || animations.flipIn;
      tl.add(selectedAnimation());

      // Cleanup function
      return () => {
        splitText.revert();
        tl.kill();
      };
    }
  }, [headline, triggerRef, animationType]);

  const renderHeadline = () => {
    if (typeof headline === "string") {
      return (
        <div ref={headlineRef} className="headline-text">
          {headline}
        </div>
      );
    } else if (React.isValidElement(headline)) {
      return React.cloneElement(headline, {
        ref: headlineRef,
        className: `${headline.props.className || ""} headline-text`,
      });
    } else {
      return (
        <div ref={headlineRef} className="headline-text">
          {headline}
        </div>
      );
    }
  };

  return (
    <div ref={triggerRef} className={`header_section ${textColor}`}>
      <div className="overflow-hidden relative pb-8 pt-14 lg:pb-10 lg:pt-20">
        <div className={`h-[1px] relative ${backGroundLine}`}>
          <div
            ref={lineRef}
            className={`h-[1px] absolute top-0 left-0 z-10 ${lineColor}`}
            style={{ width: "0px" }}
          ></div>
        </div>
      </div>

      <div
        className={`box-title text-md lg:text-xl tracking-widest font-grotesk mb-4 lg:mb-6 ${textColor}`}
      >
        <p
          className="w-fit uppercase inline-block whitespace-nowrap"
          ref={textRef}
        >
          {title}
        </p>
      </div>

      <div className="headline-container overflow-hidden">
        {renderHeadline()}
      </div>
    </div>
  );
};

export default HeaderSection;
