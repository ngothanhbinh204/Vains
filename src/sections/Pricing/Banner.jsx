import React from "react";
import BannerImage from "@/assets/images/Banner_Pricing_Main.png";
import LightSpot from "@/sections/Shared/LightSpot";

const Banner = () => {
  return (
    <section
      className="pricing-banner h-[100vh] overflow-hidden"
      style={{ position: "relative", textAlign: "center" }}
    >
      <img
        src={BannerImage}
        alt="Pricing Banner"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
      />
      <div
        className="gradient-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(11, 11, 11, 0) 40.87%, #0B0B0B 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="banner-content max-w-96"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <LightSpot size={700} top="-350%" left="-40%" />
        <LightSpot size={700} top="-430%" left="-230%" />
        <LightSpot size={700} top="-400%" left="130%" />

        <h1
          className="text-4xl lg:text-[64px] font-bold bg-clip-text text-transparent mb-6"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FCB236 0%, #9BFFF9 42.85%, #42C3D5 100%)",
          }}
        >
          PRICING
        </h1>
        <p className="text-md lg:text-lg font-helvetica-light">
          Safely collect, process, and share your data with the plan that’s
          right for you
        </p>
      </div>
    </section>
  );
};

export default Banner;
