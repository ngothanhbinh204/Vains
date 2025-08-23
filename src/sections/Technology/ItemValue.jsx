import React from "react";
import { Shield } from "lucide-react";

const ItemValue = (props) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto pt-9 pl-8 ">
      <div className="item-border-linear2 p-[18px] rounded-[12px] max-w-full md:max-w-80 h-full backdrop-blur-xs">
        <p className="text-md text-white">
          {props.content || "Reliable and secure technology solutions."}
        </p>
      </div>
      <div
        style={{
          background: "linear-gradient(180deg, #42C3D5 0%, #24897E 100%)",
        }}
        className="icon p-2.5 w-[60px] h-[60px] rounded-full absolute top-0 left-0 z-10"
      >
        <img src={props.icon} alt="" />
      </div>
    </div>
  );
};

export default ItemValue;
