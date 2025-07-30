import React from "react";
import img from "@/assets/images/Battery.avif";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

const Section1 = () => {
  return (
    <div
      className="min-h-screen 
      flex items-center box-border overflow-hidden relative mb-10 md:flex-col md:h-full p-4 md:p-8"
    >
      <div className=" h-full relative bg-white px-6 py-8 lg:px-12 rounded-2xl shadow-2xl mx-auto grid md:grid-cols-2 lg:flex-row gap-12 items-center">
        <div className="space-y-4 relative md:space-y-8 pl-8 md:pl-14 md:px-8 lg:pl-20 lg:px-12">
          <div className="overflow-hidden absolute h-[90%] w-[1px] left-0 top-1/2 -translate-y-1/2">
            <div className="h-full relative bg-gray-200">
              <div className=" h-2/5 w-full absolute top-1/4 left-0 z-10 bg-black"></div>
            </div>
          </div>
          <h2 className="text-sm md:text-2xl font-grotesk text-black uppercase">
            OPTIMIZED BATTERY EFFICIENCY ITEM 3
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-row gap-5 items-center">
              <span className="text-3xl md:text-4xl font-helvetica-light ">
                223 Mi
              </span>
              <p className="text-xl text-baseGray ">Electric Range</p>
            </div>
            <hr className="" />
            <div className="flex flex-row gap-5 items-center">
              <span className="text-4xl font-helvetica-light ">223 Mi</span>
              <p className="text-xl text-baseGray ">Electric Range</p>
            </div>
          </div>
          <p className=" leading-[1.4] text-md">
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It’s an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share the company
            history or highlight a particular feature that sets it apart from
            competitors.
          </p>
          <ReadMoreButton className="text-baseGray hover:text-black" />
        </div>
        <div className=" flex items-center justify-center">
          <img className="w-full aspect-[4/3] object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
