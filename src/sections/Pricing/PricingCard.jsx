import React from "react";
import { Check, ChevronRight } from "lucide-react";
import PricingButton from "@/components/ui/ButtonLinear";

const PricingCard = ({
  plan,
  title,
  isAlternate = false,
  maxDetailsHeight,
  maxBenefitsHeight,
  className = "",
}) => {
  return (
    <div
      className={`p-8 flex flex-col backdrop-blur-3xl w-full ${className}`}
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        minHeight: "100%", // Đảm bảo card chiếm toàn bộ chiều cao
      }}
    >
      {/* Header - Fixed height */}
      <div className="text-center mb-6 space-y-4 flex-shrink-0">
        <h3
          className={`text-md md:text-lg font-bold text-white min-h-[1.5rem]`}
        >
          {plan.title}
        </h3>
        <div className="rounded-full border border-white px-4 py-1.5 inline-block w-full">
          <span className="text-gray-300 text-sm font-medium">
            {plan.badge}
          </span>
        </div>
        <h3
          className={`text-3xl lg:text-[36px] font-bold bg-clip-text text-transparent min-h-[3rem]`}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(155, 255, 249, 1) 0%, rgba(66, 178, 181, 1) 100%)",
          }}
        >
          {plan.price}
          {plan.period && <span className="">/{plan.period}</span>}
        </h3>
      </div>

      {/* Details - Fixed height based on maxDetailsHeight */}
      <div className="mb-6 flex-shrink-0">
        <h3 className={`text-white font-semibold mb-3`}>Details</h3>
        <div
          className="space-y-[18px] flex flex-col justify-start"
          style={{
            minHeight: `${maxDetailsHeight}px`,
            height: `${maxDetailsHeight}px`, // Fixed height
          }}
        >
          {plan.details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mb-6 flex-shrink-0"></div>

      {/* Benefits - Fixed height based on maxBenefitsHeight */}
      <div className="mb-8 flex-shrink-0">
        <h3 className={`text-white font-semibold mb-3`}>User Benefits</h3>
        <div
          className="space-y-[18px] flex flex-col justify-start"
          style={{
            minHeight: `${maxBenefitsHeight}px`,
            height: `${maxBenefitsHeight}px`, // Fixed height
          }}
        >
          {plan.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 p-0.5 bg-[rgba(155,255,249,0.2)] rounded-full text-[rgba(155,255,249,1)] mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button - Always at bottom */}
      <div className="mt-auto flex-shrink-0">
        <PricingButton
          variant={"rainbow"}
          className="!text-white !bg-[rgb(4,12,13)] w-full"
          onClick={() => alert("Button clicked!")}
        >
          Get Started
        </PricingButton>
      </div>
    </div>
  );
};

export default PricingCard;
