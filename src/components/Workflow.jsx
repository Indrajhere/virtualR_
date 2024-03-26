import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center tracking-wide text-3xl sm:text-5xl lg:text-6xl">
        Accelerate your
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-red-500">
          {" "}
          coding workflow.
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code-img" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col pt-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 flex mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="text-xl mb-2 mt-1">{item.title}</h4>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
