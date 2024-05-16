import React from "react";
import AboutUs from "../About Us/AboutUs";
import Curriculum from "../Curriculum/Curriculum";
import Achievements from "../Achievements/Achievements"

const Hero = () => {
  return (
    <div className="w-full h-full">
      <img
        src="/hero-2.jpg"
        className="object-cover h-[95vh] w-full bg-red-200 opacity-85"
        alt="hero-img"
      />
      <div className="absolute top-[22rem] left-2 md:left-20 md:w-[30rem] text-white">
        <h1 className="md:text-6xl text-4xl font-bold">Izone Coaching Classes</h1>
        <p className="text-base mt-12 mb-5">
          This is where we teach students skills they need to transform
          themselves, others, and our global communities.
        </p>
        <button className=" text-indigo-600 px-5 py-3 bg-white font-semibold rounded-md text-sm hover:bg-gray-200">
          Our Academics
        </button>
      </div>
      <AboutUs/>
      <Achievements/>
      <Curriculum/>
    </div>

  );
};

export default Hero;
