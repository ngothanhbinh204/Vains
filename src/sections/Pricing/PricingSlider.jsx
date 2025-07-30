import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PricingCard from "@/sections/Pricing/PricingCard";

const pricingPlans = [
  {
    title: "FREE TRIAL PACKAGE",
    badge: "VAINS Free Trial",
    price: "$0",
    details: [
      "Ask 1-2 questions for free",
      "No credit card required",
      "Upgrade anytime",
    ],
    benefits: [
      "Try before you commit",
      "Know if it suits your needs",
      "Hassle - free onboarding",
    ],
  },
  {
    title: "ONE - TIME USE PACKAGES",
    badge: "QuickChat AI",
    price: "$4",
    period: "session",
    details: [
      "Ask one-time questions related to visa, immigration, study, study, or travel",
      "Response delivered via web, email, or PDF",
      "No login required",
    ],
    benefits: [
      "More reliable than Google",
      "Save time",
      "Avoids misinformation from shady sources",
    ],
  },
  {
    title: "ONE - TIME USE PACKAGES",
    badge: "VoiceCall AI",
    price: "$8",
    period: "call",
    details: [
      "Talk to AI in multilingualism",
      "Ask anything and get real-time voice responses",
      "Up to 10-minute call duration",
    ],
    benefits: [
      "Easy for elderly or voice-preferred users",
      "No typing required",
      "Directly solves one clear concern",
    ],
  },
  {
    title: "PERSONAL MONTHLY PLANS",
    badge: "Professional Plan",
    price: "$29",
    period: "month",
    details: [
      "Unlimited questions per month",
      "Priority email support",
      "Advanced AI features",
      "Export conversations to PDF",
    ],
    benefits: [
      "Best value for regular users",
      "Comprehensive immigration guidance",
      "Professional document templates",
    ],
  },
  {
    title: "PERSONAL MONTHLY PLANS",
    badge: "Enterprise Solution",
    price: "$99",
    period: "month",
    details: [
      "Custom AI training for your needs",
      "Dedicated account manager",
      "API access available",
      "White-label options",
    ],
    benefits: [
      "Scalable for large organizations",
      "Custom integrations available",
      "Premium support included",
    ],
  },
  {
    title: "PERSONAL MONTHLY PLANS",
    badge: "Student Special",
    price: "$9",
    period: "month",
    details: [
      "Student verification required",
      "50 questions per month",
      "Study visa specialization",
      "University application help",
    ],
    benefits: [
      "Affordable for students",
      "Education-focused guidance",
      "Application process support",
    ],
  },
];

const PricingSlider = () => {
  const [maxDetailsHeight, setMaxDetailsHeight] = useState(0);
  const [maxBenefitsHeight, setMaxBenefitsHeight] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Tính toán chiều cao tối đa cho details và benefits
    const calculateMaxHeight = (items, baseLineHeight = 20, spacing = 18) => {
      return Math.max(
        ...items.map(
          (item) => item.length * (baseLineHeight + spacing) - spacing + 40 // +40 cho padding
        )
      );
    };

    setMaxDetailsHeight(calculateMaxHeight(pricingPlans.map((p) => p.details)));
    setMaxBenefitsHeight(
      calculateMaxHeight(pricingPlans.map((p) => p.benefits))
    );
  }, []);

  return (
    <div className="bg-black h-auto">
      <div className="max-w-1440 px-4 md:px-6 transform -translate-y-[100px] z-50 relative mx-auto">
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="px-8"
            // Đảm bảo tất cả slides có chiều cao bằng nhau
            autoHeight={false}
          >
            {pricingPlans.map((plan, index) => (
              <SwiperSlide key={index} className="h-auto">
                <PricingCard
                  plan={plan}
                  isAlternate={index % 2 === 1}
                  maxDetailsHeight={maxDetailsHeight}
                  maxBenefitsHeight={maxBenefitsHeight}
                  className={`${
                    index % 2 === 0 ? "even-card" : "odd-card"
                  } h-full`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="w-12 h-12 flex justify-center items-center swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 3xl:-translate-x-[150%] z-10 border-2 border-[rgba(69,69,69,1)] rounded-full p-2 transition-all duration-300 ease-in-out bg-transparent hover:bg-[rgba(66,195,213,0.1)] hover:border-[rgba(66,195,213,1)] hover:shadow-emerald-500/25 group">
            <ChevronLeft className="w-6 h-6 text-[rgba(118,118,118,1)] group-hover:text-[rgba(66,195,213,1)] transition-colors duration-300" />
          </button>

          <button className="w-12 h-12 flex justify-center items-center swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 3xl:translate-x-[150%] z-10 border-2 border-[rgba(69,69,69,1)] rounded-full p-2 transition-all duration-300 ease-in-out bg-transparent hover:bg-[rgba(66,195,213,0.1)] hover:border-[rgba(66,195,213,1)] hover:shadow-emerald-500/25 group">
            <ChevronRight className="w-6 h-6 text-[rgba(118,118,118,1)] group-hover:text-[rgba(66,195,213,1)] transition-colors duration-300" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgb(75, 85, 99);
          border-radius: 9999px;
          transition: all 0.2s;
        }
        .swiper-pagination-bullet-active {
          background: rgb(20, 184, 166);
        }

        /* Đảm bảo tất cả slides có chiều cao bằng nhau */
        .swiper-wrapper {
          align-items: stretch;
        }

        .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default PricingSlider;
