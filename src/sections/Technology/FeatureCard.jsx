import React from "react";

function FeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition = "left",
}) {
  const contentOrderClass = imagePosition === "right" ? "md:order-1" : "";
  const imageOrderClass = imagePosition === "right" ? "md:order-2" : "";

  return (
    <div className="bg-white overflow-hidden flex flex-col gap-x-8 gap-y-12 md:flex-row max-w-full mx-auto">
      <div className={`w-full md:w-1/2 flex-shrink-0 ${imageOrderClass}`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full rounded-2xl h-auto md:h-full object-cover"
        />
      </div>
      <div
        className={`w-full md:w-1/2 lg:p-10 flex flex-col justify-center ${contentOrderClass}`}
      >
        <div className="md:max-w-[430px] lg:max-w-md xl:max-w-full mx-auto">
          <h2 className="text-xl font-normal text-gray-800 mb-2">{title}</h2>
          <hr className="border-t border-gray-200 mb-4" />
          <p className=" text-md leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
