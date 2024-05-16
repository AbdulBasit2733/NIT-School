import React from "react";

const Curriculum = () => {
  return (
    <section className="curriculum">
      <div className="px-5 space-y-5 md:flex justify-around">
        <h1 className="text-2xl font-semibold">Curriculum Overview</h1>
        <div>
          <hr className="w-10 border border-indigo-600 mb-8" />
          <p className="text-sm md:w-[30rem]">
            The Champion School aims at offering all our students a broad and
            balanced curriculum that provides rewarding and stimulating
            activities to prepare them for the best social and cultural life.
          </p>
        </div>
      </div>
      <div className="py-10">
        <div className="w-[20rem] mx-auto shadow-lg rounded-md">
          <img src="./img.jpg" />
          <div className="p-5">
            <h1 className="text-lg font-semibold mb-2">1 to 7</h1>
            <p className="text-sm text-slate-500">
              The study of ancient and modern languages, philosophy, history,
              and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
