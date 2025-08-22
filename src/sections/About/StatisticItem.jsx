import React from "react";

const StatisticItem = ({ value, highlight, label }) => {
  return (
    <div className="flex flex-row items-start gap-4">
      <h3 className="text-2xl md:text-[42px] font-bold text-white w-12 md:w-20">
        {value}
      </h3>
      <div className="flex flex-col gap-2 justify-between">
        <img className="w-4 h-4" src={highlight} alt="" />
        <p className=" text-xs md:text-sm">{label}</p>
      </div>
    </div>
  );
};

export default StatisticItem;
