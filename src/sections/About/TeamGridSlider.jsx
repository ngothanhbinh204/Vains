import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TeamMemberCard from "./TeamMemberCard";

// Stacked Scroll Container Component
const StackedScrollContainer = ({ children }) => {
  const containerRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    const lastIndex = sections.length - 1;

    if (sections.length === 0) return;

    // Pin tất cả sections trừ section cuối cùng
    sections.forEach((el, i) => {
      if (i < lastIndex) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: () =>
            sections[lastIndex]
              ? `${
                  sections[lastIndex].offsetTop +
                  sections[lastIndex].offsetHeight
                } top`
              : "bottom top",
          pin: true,
          pinSpacing: false,
          endTrigger: sections[lastIndex],
          id: `pin-${i}`,
          // markers: { indent: 150 * i }, // Uncomment for debugging
        });
      }
    });

    // Animation cho section cuối cùng
    if (sections[lastIndex]) {
      ScrollTrigger.create({
        trigger: sections[lastIndex],
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;

          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, {
                y: -progress * window.innerHeight,
              });
            }
          });
        },
        onLeave: () => {
          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, { y: -window.innerHeight });
            }
          });
        },
        onEnterBack: () => {
          sections.forEach((section, i) => {
            if (i < lastIndex) {
              gsap.set(section, { y: 0 });
            }
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => {
        const isLast = index === React.Children.count(children) - 1;

        return (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="content"
            style={{
              position: "relative",
              zIndex: index + 1, // Item sau có z-index cao hơn item trước
              backgroundColor: isLast ? "transparent" : undefined,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

const TeamGridSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const teamMembers = [
    {
      name: "LEO",
      position: "CEO & FOUNDER",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "DARCY",
      position: "DEV",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "VIDEN",
      position: "AI ENGINEER",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "ROBERT",
      position: "DEV",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "WEANIE",
      position: "DESIGNER",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "CLARA",
      position: "CONTENT",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="w-full flex">
      {!isMobile && (
        <div className="flex justify-start gap-9">
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className={`custom-prev w-12 h-12 flex items-center justify-center border-2 border-[rgba(75,75,75,1)] rounded-full transition-colors duration-200 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous"
          >
            <SlArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={isEnd}
            className={`custom-next w-12 h-12 flex items-center justify-center border-2 border-[rgba(75,75,75,1)] rounded-full transition-colors duration-200 ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next"
          >
            <SlArrowRight size={20} />
          </button>
        </div>
      )}
      <div className="lg:max-w-5xl ml-auto md:px-4">
        {/* Desktop View */}
        {!isMobile && (
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="relative !px-4 !py-8"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamMemberCard
                  member={member}
                  index={index}
                  isOdd={index % 2 === 1}
                  isMobile={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Mobile View with Stack Effect */}
        {isMobile && (
          <div className="block md:hidden">
            <StackedScrollContainer>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="min-h-screen flex items-center justify-center p-4 bg-white"
                >
                  <div className="w-full max-w-sm mx-auto">
                    <TeamMemberCard
                      member={member}
                      index={index}
                      isMobile={true}
                      isOdd={index % 2 === 1}
                    />
                  </div>
                </div>
              ))}
            </StackedScrollContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamGridSlider;
