import React from "react";

const Achievements = () => {
  return (
    <>
      <h1 className="text-center mt-10 text-xl font-semibold">
        Champion School at a Glance
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 px-5 py-20">
        <div className="text-center space-y-2 w-[10rem]">
          <h1 className="text-3xl md:text-6xl text-indigo-600 font-bold">
            2K+
          </h1>
          <p className="text-sm text-slate-600 font-semibold">
            Current Enrollments
          </p>
        </div>
        <div className="text-center space-y-2 w-[10rem]">
          <h1 className="text-3xl md:text-6xl text-indigo-600 font-bold">
            90+
          </h1>
          <p className="text-sm text-slate-600 font-semibold">
            Qualified Staff
          </p>
        </div>
        <div className="text-center space-y-2 w-[10rem]">
          <h1 className="text-3xl md:text-6xl text-indigo-600 font-bold">
            80+
          </h1>
          <p className="text-sm text-slate-600 font-semibold">
            Clubs & Activities
          </p>
        </div>
        <div className="text-center space-y-2 w-100rem]">
          <h1 className="text-3xl md:text-6xl text-indigo-600 font-bold">
            100+
          </h1>
          <p className="text-sm text-slate-600 font-semibold">
            Active PTFA Members
          </p>
        </div>
      </div>
    </>
  );
};

export default Achievements;
