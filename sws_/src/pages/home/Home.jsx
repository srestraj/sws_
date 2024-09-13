import logo from "../../assets/iafgg.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="relative h-[841px] w-[1440px] flex-col items-center justify-start font-sans z-20">
      <h1 className="absolute top-[76px] left-[24px] mt-6 text-5xl font-extrabold  text-[#1F323D]  tracking-wider">
        The International Association <br />
        of Facial Growth Guidence <br /> (Orthotropics<sup>&reg;</sup>)
      </h1>
      <div className="relative  w-[515px] h-[176px] top-[378px] left-[861px] font-inter">
        <div className="relative">
          <p className="leading-8">
            The IAFGG represents all those clinicians and technicians who
            believe that ideal development of the face and jaws is dependent on
            correct ‘oral posture’.
          </p>
          <button className="flex justify-center items-center text-[#F0F7FA] text-center bg-[#237688] text-xl rounded-full px-2 py-1 my-5">
            Find out more <ChevronRightIcon className="size-5 mx-2" />
          </button>
        </div>
      </div>
      <img
        src={logo}
        className="bg-[ #F0F3F5] opacity-10 h-[881.56px] w-[849px] absolute top-[-33.58px] left-[867px] -z-20 "
        alt=""
      />
    </div>
  );
};

export default Home;
