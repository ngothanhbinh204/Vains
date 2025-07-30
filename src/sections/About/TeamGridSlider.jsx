import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TeamMemberCard from "./TeamMemberCard";

const TeamGridSlider = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const teamMembers = [
    {
      name: "SARAH SUAREZ",
      position: "CEO",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "MIKE DENG",
      position: "VPE",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "REAY FINIGAN",
      position: "CTO",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
    {
      name: "REAY FINIGAN",
      position: "CTO",
      description:
        "This is the space to introduce the business's team and what makes it special.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
  ];
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    initScrollTrigger();

    return () => {
      window.removeEventListener("resize", checkMobile);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const initScrollTrigger = () => {
    if (window.innerWidth < 768 && itemRefs.current.length > 0) {
      itemRefs.current.forEach((el) => {
        if (el) {
          window.ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            markers: false,
          });
        }
      });
    }
  };

  return (
    <div className="w-full py-16">
      <div className="lg:max-w-5xl ml-auto md:px-4">
        {/* PC View */}
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

        {/* Mobile View */}
        {isMobile && (
          <div ref={containerRef} className="block md:hidden">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                index={index}
                isMobile={true}
                isOdd={index % 2 === 1}
                cardRef={(el) => (itemRefs.current[index] = el)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="hidden mt-4 md:flex justify-end pr-8 gap-3">
        <button
          onClick={handlePrev}
          disabled={isBeginning}
          className={`custom-prev w-10 h-10 flex items-center justify-center rounded-[6px] border border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 ${
            isBeginning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous"
        >
          <GoArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={isEnd}
          className={`custom-next w-10 h-10 flex items-center justify-center rounded-[6px] border border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 ${
            isEnd ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next"
        >
          <GoArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TeamGridSlider;
