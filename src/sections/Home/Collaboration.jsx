import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "@/sections/Shared/HeaderSection";
import ImageProduct from "@/assets/images/product.avif";
import { motion } from "framer-motion";

// Logo imports
import idlSoftwareLogo from "@/assets/images/collap.avif";
import generalTransportLogo from "@/assets/images/collap.avif";
import triNexLogo from "@/assets/images/collap.avif";
import imogenCarsLogo from "@/assets/images/collap.avif";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = ({
  animationType = "slideUp", // slideUp, fadeScale, flip, wave
  useGSAP = true, // true for GSAP, false for Framer Motion only
}) => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);
  const gridRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const textElement = textRef.current;
    const lineElement = lineRef.current;
    const gridElement = gridRef.current;

    if (!textElement || !lineElement || !sectionRef.current) return;

    // Line animation (existing)
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

    // Grid items animation với GSAP
    if (useGSAP && gridElement && itemRefs.current.length > 0) {
      const animations = {
        slideUp: () => {
          gsap.set(itemRefs.current, { y: 100, opacity: 0, scale: 0.8 });
          return gsap.to(itemRefs.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: { amount: 0.6, from: "start" },
            ease: "power3.out",
          });
        },

        fadeScale: () => {
          gsap.set(itemRefs.current, { opacity: 0, scale: 0.5, rotation: 10 });
          return gsap.to(itemRefs.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: { amount: 0.8, from: "center" },
            ease: "back.out(1.7)",
          });
        },

        flip: () => {
          gsap.set(itemRefs.current, {
            rotationY: -90,
            opacity: 0,
            transformPerspective: 1000,
          });
          return gsap.to(itemRefs.current, {
            rotationY: 0,
            opacity: 1,
            duration: 1.2,
            stagger: { amount: 0.6, from: "random" },
            ease: "power2.out",
          });
        },

        wave: () => {
          gsap.set(itemRefs.current, { y: 120, opacity: 0, skewY: 7 });
          return gsap.to(itemRefs.current, {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1,
            stagger: {
              amount: 1.2,
              from: "start",
              ease: "sine.inOut",
            },
            ease: "elastic.out(1, 0.5)",
          });
        },
      };

      const selectedAnimation = animations[animationType] || animations.slideUp;

      ScrollTrigger.create({
        trigger: gridElement,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: selectedAnimation(),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animationType, useGSAP]);

  const partners = [
    { id: 1, name: "IDL Software", logo: idlSoftwareLogo },
    { id: 2, name: "General Transport", logo: generalTransportLogo },
    { id: 3, name: "Tri-Nex", logo: triNexLogo },
    { id: 4, name: "Imogen Cars", logo: imogenCarsLogo },
  ];

  const customTransition = {
    duration: 2.2,
    ease: [0.14, 0.4, 0.09, 0.99],
  };

  // Framer Motion variants cho từng loại animation
  const getFramerVariants = () => {
    const variants = {
      slideUp: {
        container: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        },
        item: {
          hidden: { y: 80, opacity: 0, scale: 0.9 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        },
      },

      fadeScale: {
        container: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        },
        item: {
          hidden: { opacity: 0, scale: 0.6, rotate: 15 },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            },
          },
        },
      },

      flip: {
        container: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        },
        item: {
          hidden: { opacity: 0, rotateY: -90 },
          visible: {
            opacity: 1,
            rotateY: 0,
            transition: {
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        },
      },

      wave: {
        container: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        },
        item: {
          hidden: { y: 100, opacity: 0, skewY: 5 },
          visible: {
            y: 0,
            opacity: 1,
            skewY: 0,
            transition: {
              duration: 1.2,
              ease: [0.68, -0.55, 0.265, 1.55],
            },
          },
        },
      },
    };

    return variants[animationType] || variants.slideUp;
  };

  const currentVariants = getFramerVariants();

  return (
    <section ref={sectionRef} className="bg-white relative z-10">
      <div className="relative z-10 max-w-1440 px-4 md:px-6 md:pb-14 mx-auto h-auto flex flex-col gap-12">
        <HeaderSection
          theme="light"
          title="COLLABORATION"
          headline={
            <h1 className="text-4xl md:text-5xl lg:text-7xl md:max-w-10/12 font-helvetica-light leading-tight">
              Our Industry Partners
            </h1>
          }
          triggerRef={triggerRef}
          lineRef={lineRef}
          textRef={textRef}
        />

        <div className="flex justify-end m-4 md:m-6 lg:m-10">
          <motion.div
            ref={gridRef}
            className="max-w-[900px] lg:min-h-[70vh] grid grid-cols-2 gap-4 md:gap-6"
            variants={useGSAP ? undefined : currentVariants.container}
            initial={useGSAP ? undefined : "hidden"}
            whileInView={useGSAP ? undefined : "visible"}
            viewport={useGSAP ? undefined : { once: true, amount: 0.3 }}
            style={animationType === "flip" ? { perspective: 1000 } : {}}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="bg-white rounded-2xl aspect-3/2 object-cover shadow-itemCus flex justify-center items-center overflow-hidden"
                variants={useGSAP ? undefined : currentVariants.item}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={customTransition}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-auto transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
