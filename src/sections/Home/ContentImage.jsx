import React from "react";
import img from "../../assets/images/bg_why.avif";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

const ContentImage = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center text-white">
      <div className="relative z-10 max-w-1440 mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 py-16">
        <div className="w-full text-left">
          <div className="space-y-8 md:pl-20 px-12">
            <p className=" leading-[1.4] text-md">
              This is a space to share more about the business: who's behind it,
              what it does and what this site has to offer. It’s an opportunity
              to tell the story behind the business or describe a special
              service or product it offers. You can use this section to share
              the company history or highlight a particular feature that sets it
              apart from competitors.
            </p>
            <ReadMoreButton className="text-baseGray hover:text-black" />
          </div>
        </div>
        <div className="">
          <img className="w-full h-auto object-cover" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContentImage;
