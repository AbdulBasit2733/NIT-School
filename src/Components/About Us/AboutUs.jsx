import React from "react";

const AboutUs = () => {
  return (
    <div className="h-fit mt-10 md:flex">
      <div className=" md:p-24 p-10 space-y-10">
        <h1 className="text-4xl font-semibold text-indigo-600">Learning Begin With Us</h1>
        <p>
          We, at Champion School offer supportive and inspirational environments
          for young enquiring minds to learn and grow with us. Our passion for
          learning means we achieve more than outstanding results. We strive to
          build confident and creative thinkers and aim at delivering an
          education that is truly relevant to their future.
        </p>
      </div>
      <div className="md:px-24 md:pt-36 md:pb-24 p-10 space-y-10">
        <hr className="border border-indigo-600 w-14" />
        <p>
          We are an early learning academy focused on social-emotional
          development and early literacy and numeracy. Our students walk out
          with the character and confidence to make their mark in the world,
          equipped with the knowledge and real-world skills that take them way
          ahead in the industry they may serve.
        </p>
        <button className="text-indigo-500 px-5 py-3 bg-white shadow-lg rounded-md hover:bg-slate-100 text-sm font-semibold">Know More About Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
