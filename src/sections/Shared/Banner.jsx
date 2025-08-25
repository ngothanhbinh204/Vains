import React from "react";
import PlanetarySystem from "@/sections/Shared/PlanetarySystem";
import LightSpot from "@/sections/Shared/LightSpot";
import ButtonLinear from "@/components/ui/ButtonLinear";
import BoxTextHighlight from "@/components/ui/BoxTextHighlight";
import BannerImage from "@/assets/images/Banner_gradiant.svg";
// Component chính cho banner
const DeliveryBanner = () => {
  return (
    <section className="relative bg-black pt-10 overflow-hidden">
      <img
        src={BannerImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-1440 mx-auto px-4 lg:px-4 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="space-y-8 relative pt-16">
            {/* <LightSpot size={700} top={-300} left={300} />
            <LightSpot size={400} top={50} left={-200} />
            <LightSpot size={400} top={0} left={0} />
            <LightSpot size={400} top={0} left={0} /> */}
            {/* Badge */}

            <BoxTextHighlight
              variant="jade_green"
              className="text-sm"
              onClick={() => alert("Button clicked!")}
            >
              Vital Infrastructure for The Planet
            </BoxTextHighlight>

            <h1
              className="text-5xl lg:text-[82px] font-bold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(93.96deg, #FFFFFF 4.85%, #FCB236 41.64%, #9BFFF9 79.47%, #42C3D5 139.11%)",
              }}
            >
              The Future of Delivery Is Here
            </h1>

            {/* Description */}
            <div className="space-y-4 font-helvetica-light text-white text-lg">
              <p>
                DISCOVER A GREENER, FASTER SELF-DRIVING DELIVERY SOLUTION WITH
                VOLASO.
              </p>
              <p>
                DISCOVER A GREENER, FASTER SELF-DRIVING DELIVERY SOLUTION WITH
                VOLASO.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLinear
                variant="jade_green"
                onClick={() => alert("Button clicked!")}
              >
                Learn More
              </ButtonLinear>
              <ButtonLinear
                className="linear-buttonBasic !py-3.5 !px-4"
                variant="basic"
                onClick={() => alert("Button clicked!")}
              >
                Contact Us
              </ButtonLinear>
            </div>
          </div>

          {/* Right side - Orbit system */}
          <div className="flex justify-center lg:justify-end">
            <PlanetarySystem />
          </div>
        </div>
      </div>
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-pulse animation-delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse animation-delay-2000" />
    </section>
  );
};

export default DeliveryBanner;
