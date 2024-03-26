import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className=" uppercase bg-neutral-900 rounded-full px-2 py-1 text-orange-500 text-sm h-6 font-medium">
          Feature
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-400 to-red-700 bg-clip-text text-transparent">
            {" "}
            your code
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
            <div className="flex">
              <div className="flex mx-2 items-center justify-center h-10 w-10 p-2 rounded-full bg-neutral-900 text-orange-700">
                {item.icon}
              </div>
              <div className="">
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md text-neutral-500 p-2 mb-20">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
