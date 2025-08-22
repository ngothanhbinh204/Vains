import React from "react";
import BannerImage from "@/assets/images/Banner_Pricing_Main.png";
import MemberImg from "@/assets/images/about_people.png";

import LightSpot from "@/sections/Shared/LightSpot";
import PlanetarySystem from "@/sections/Shared/PlanetarySystemBanner";
const TitlePage = (props) => {
  return (
    <section
      className="pricing-banner h-full overflow-hidden pt-48 pb-20"
      style={{ position: "relative", textAlign: "center" }}
    >
      <LightSpot size={700} top="-42%" left="-22%" />
      <LightSpot size={800} top="-30%" left="25%" />
      <LightSpot size={700} top="-40%" left="72%" />

      <div className="banner-content relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="flex flex-col max-w-[430px] mx-auto ">
          <h1
            className="text-4xl lg:text-[64px] font-bold bg-clip-text text-transparent mb-4 mx-auto w-max"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FCB236 0%, #9BFFF9 42.85%, #42C3D5 100%)",
            }}
          >
            {props.title}
          </h1>
          <p className="text-md lg:text-lg font-helvetica-light">
            {props.description}
          </p>
        </div>
        <div className="box-img w-3/4 max-w-[1440px] h-[auto] rounded-xl overflow-hidden mt-8 z-10">
          <img
            className="aspect-video object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
            src={MemberImg}
            alt=""
          />
        </div>
        <div className="absolute inset-0 top-[20%] 2xl:top-[10%]">
          <div
            className="gradient-overlay relative w-full h-screen min-h-full overflow-visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(11, 11, 11, 0) 40.87%, #0B0B0B 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <PlanetarySystem />
        </div>
      </div>
    </section>
  );
};

export default TitlePage;
