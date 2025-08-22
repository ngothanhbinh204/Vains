import React from "react";
import StatisticItem from "@/sections/About/StatisticItem";
import Star from "@/assets/icons/Star.svg";

const TextStatistic = () => {
  return (
    <section className=" text-white py-16 px-4 md:px-8 bg-red">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          {/* Left side - Statistics description */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Driving a Sustainable Future
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This is the space to describe the product. Write a short
                overview that includes important features, pricing and other
                relevant info for a potential buyer. Consider adding an image or
                video to show off the product and entice visitors to make a
                purchase.
              </p>
              <p>
                This is the space to describe the product. Write a short
                overview that includes important features, pricing and other
                relevant info for a potential buyer.
              </p>
              <p>
                Consider adding an image or video to show off the product and
                entice visitors to make a purchase.
              </p>
            </div>
          </div>

          {/* Right side - Statistics grid */}
          <div className="grid grid-cols-2 gap-6 px-8 py-6 md:px-14 md:py-12 bg-[rgba(16,56,52,0.5)] item-border-linear">
            <StatisticItem
              value="40K"
              highlight={Star}
              label="Global Happy Clients"
            />
            <StatisticItem
              value="50K"
              highlight={Star}
              label="Global Happy Clients"
            />
            <StatisticItem
              value="245"
              highlight={Star}
              label="Global Happy Clients"
            />
            <StatisticItem
              value="550"
              highlight={Star}
              label="Global Happy Clients"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextStatistic;
