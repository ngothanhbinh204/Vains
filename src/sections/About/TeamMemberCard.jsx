import React from "react";
import heroImage from "@/assets/images/avt.avif";

const TeamMemberCard = ({ member, index, isMobile, isOdd, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={`${
        isMobile ? "h-screen w-full mb-4 bg-white" : "flex-shrink-0"
      }`}
    >
      <div
        className={`rounded-2xl shadow-itemCus h-full md:h-[600px] relative overflow-hidden transition-all duration-300 ${
          isOdd ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div className="relative z-10 h-full flex flex-col">
          <div
            className={`mb-6 ${
              isMobile ? "text-center" : ""
            } space-y-6  p-4 md:p-5 `}
          >
            <h3 className="text-xs md:text-md font-medium tracking-widest">
              {member.name}
            </h3>
            <h2 className="text-4xl md:text-3xl font-helvetica-light mb-4">
              {member.position}
            </h2>
            <p className=" text-sm md:text-base leading-relaxed">
              {member.description}
            </p>
          </div>

          <div className="mt-auto h-auto flex justify-center">
            <img
              src={heroImage}
              alt={member.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
