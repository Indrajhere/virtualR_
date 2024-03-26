import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-lg mt-10 text-center max-w-4xl text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md mx-3"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 border rounded-md mx-3">
          Documentation
        </a>
      </div>
      <div className="flex flex-row justify-center mt-10 ">
        <video
          autoPlay
          muted
          loop
          src={video1}
          className="border border-orange-700 w-1/2  mx-2 my-4 rounded-lg shadow-sm shadow-orange-500"
        >
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          src={video2}
          className="border border-orange-700 w-1/2 mx-2 my-4 rounded-lg shadow-sm shadow-orange-500"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
