import logo from "../../../assets/iafgg.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import PillButton from "../../components/button/PillButton";

const Home = () => {
  const data = useSelector((state) => state.banner);

  return (
    <div className="relative flex-col items-center justify-start font-sans z-20  max-w-screen-2xl mx-auto mb-10">
      <h1 className="relative top-[76px] left-[24px] mt-6 text-6xl font-extrabold  text-light-green20  tracking-wider sm:-tracking-normal ">
        The International <br /> Association of Facial Growth <br /> Guidence
        (Orthotropics<sup>&reg;</sup>)
      </h1>
      <div className="relative flex flex-col w-[515px] h-[176px] top-[78px] md:left-[120px] lg:left-[861px] font-inter justify-">
        <div>
          <p className="leading-6 mb-3 text-xl text-light-blue30">
            The IAFGG represents all those clinicians and technicians who
            believe that ideal development of the face and jaws is dependent on
            correct ‘oral posture’.
          </p>
          <PillButton
            title={"Find out more"}
            backgroundColor={"bg-light-green30"}
            textColor={"text-light-white10"}
          />
        </div>
      </div>
      <img
        src={logo}
        className="bg-[ #F0F3F5] opacity-10 h-[981.56px] w-[849px] absolute top-[-203.58px] left-[967px] -z-20 "
        alt=""
      />
    </div>
  );
};

export default Home;
