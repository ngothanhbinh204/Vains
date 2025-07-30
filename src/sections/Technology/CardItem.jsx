import React from "react";
import ImageCard from "@/assets/images/img_card.avif";

const CardItem = ({ title, content, className = "" }) => {
  return (
    <div
      className={`rounded-xl bg-white shadow-itemCus h-fit overflow-hidden flex flex-col w-full transition-all duration-500 ${className}`}
    >
      <div className="flex flex-col gap-4 md:gap-6 p-6 lg:p-10 !pb-0 mb-16 lg:mb-20">
        <h2 className="text-xl">{title}</h2>
        <hr className="border-t border-gray-200" />
        <p className=" text-md leading-relaxed ">{content}</p>
      </div>
      <div className="flex-grow">
        {" "}
        <img
          src={ImageCard}
          alt="On Road Safety"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CardItem;
