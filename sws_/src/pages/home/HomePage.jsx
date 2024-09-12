import React from "react";
import logo from "../../../public/iafgg.svg";
const HomePage = () => {
  return (
    <div className="h-[651px] w-[1440px] flex-col items-center justify-start font-sans z-20 leading-6">
      <h1 className="mt-6 text-5xl font-extrabold tracking-wide text-[#1F323D]  ">
        The International Association <br />
        of Facial Growth Guidence <br /> (Orthotropics<sup>&reg;</sup>)
      </h1>
      <div className="relative w-[515px] h-[176px] top-[378px] left-[861px] m-0 font-inter">
        <div className="">
          <p className="leading-8">
            The IAFGG represents all those clinicians and technicians who
            believe that ideal development of the face and jaws is dependent on
            correct ‘oral posture’.
          </p>
          <button className="text-white text-center bg-[#237688] text-xl rounded-full px-2 py-1">
            Find out more
          </button>
        </div>
      </div>

      <img
        src={logo}
        className="opacity-45 h-3/4 fixed right-0 top-3 -z-20"
        alt=""
      />
    </div>
  );
};

export default HomePage;
