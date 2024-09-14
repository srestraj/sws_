// import logo from "../../assets/iafgg.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.banner);

  console.log(data);

  return (
    <div className="relative h-[841px] w-[1440px] flex-col items-center justify-start font-sans z-20">
      <h1 className="absolute top-[76px] left-[24px] mt-6 text-5xl font-extrabold  text-light-black30  tracking-wider">
        The International Association <br />
        of Facial Growth Guidence <br /> (Orthotropics<sup>&reg;</sup>)
      </h1>
      <div className="relative flex flex-col w-[515px] h-[176px] top-[378px] left-[861px] font-inter">
        <div className="relative">
          <p className="leading-8">
            The IAFGG represents all those clinicians and technicians who
            believe that ideal development of the face and jaws is dependent on
            correct ‘oral posture’.
          </p>
          <button className="flex justify-center items-center font-inter text-light-white10 text-center bg-light-green30  rounded-full px-2 py-1 my-5">
            Find out more
            <ChevronRightIcon className="size-5 mx-2 hover:translate-x-1 text-light-white10 duration-200 transition-transform" />
          </button>
        </div>
      </div>
      {/*  <img
        src={logo}
        className="bg-[ #F0F3F5] opacity-10 h-[881.56px] w-[849px] absolute top-[-33.58px] left-[867px] -z-20 "
        alt=""
      /> */}
    </div>
  );
};

export default Home;
