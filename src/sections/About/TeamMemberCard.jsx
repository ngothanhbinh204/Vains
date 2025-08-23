import React from "react";
import heroImage from "@/assets/images/member_list.png";

const TeamMemberCard = ({ member, isMobile, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={`card_member text-Textblack object-cover ${
        isMobile ? "h-screen w-full mb-4" : "flex-shrink-0"
      }`}
    >
      <div className="relative rounded-2xl shadow-itemCus h-full md:h-[530px] overflow-hidden">
        {/* Ảnh nền */}
        <img
          src={heroImage}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 h-full flex flex-col justify-start p-4 md:p-[22px]">
          <h3 className="text-xs md:text-xl font-medium tracking-widest mb-4">
            {member.name}
          </h3>
          <h2 className="text-4xl md:text-[36px] font-bold mb-2">
            {member.position}
          </h2>
          <p className="text-sm md:text-sm leading-tight">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
