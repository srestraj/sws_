import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import darkLogo from "../../assets/innerCardlogo.svg";
import transparentLogo from "../../assets/transparentLogo.svg";

const FindersCard = ({ background }) => {
  if (background == "#1F323D") {
    return (
      <div
        className={`relative overflow-hidden h-[140px] my-10 z-10 rounded-2xl flex justify-around  items-center bg-['${background}']`}
      >
        <h1 className="text-light-white10 font-sans font-bold text-2xl text-start ">
          Join the International Association of <br /> Facial Growth Guidance
        </h1>
        <div>
          <button className="rounded-full  ps-3 items-center py-1 text-center flex justify-center bg-light-yellow20 font-inter">
            Become a member
            <ChevronRightIcon className="size-5 mx-2 hover:translate-x-1  duration-200 transition-transform" />
          </button>
        </div>
        <img
          src={darkLogo}
          alt=""
          className="w-full absolute -z-20 opacity- "
        />
      </div>
    );
  }

  if (background == "#E3E9ED") {
    return (
      <>
        <div
          className={`relative overflow-hidden my-10 h-[140px] z-10 rounded-2xl mx-auto flex justify-around  items-center bg-[${background}]`}
        >
          <h1 className="ms-10 text-light-grey20 font-sans font-bold text-2xl text-start ">
            Find an Orthotropics practitioner <br /> near you
          </h1>
          <div>
            <button className="rounded-full ps-3 items-center py-1 text-center flex justify-center bg-light-yellow20 font-inter">
              Find a practitioner
              <ChevronRightIcon className="size-5 mx-2 hover:translate-x-1  duration-200 transition-transform" />
            </button>
          </div>
          <img
            src={transparentLogo}
            alt=""
            className="w-full absolute -z-10 opacity-20 "
          />
        </div>
      </>
    );
  }
};

export default FindersCard;
