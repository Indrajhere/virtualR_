import React from "react";
import { testimonials } from "../constants";
import user1 from "../assets/profile-pictures/user1.jpg";
const Testimonials = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide my-8 lg:my-20">
        What People are saying
      </h1>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="p-6 font-thin rounded-md border border-neutral-700 bg-neutral text-md">
              <p className="">{item.text}</p>
              <div className="flex mt-8 item-start">
                <img
                  className="h-12 w-12 mr-6 rounded-full border border-white"
                  src={item.image}
                  alt={item.user}
                />
                <div>
                    <h4 className="">{item.user}</h4>
                    <span className="text-sm font-light text-neutral-600 italic">{item.company}</span>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
