import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import darkLogo from "../../assets/innerCardlogo.svg";
import transLogo from "../../assets/transparentLogo.svg";

const FindersCard = ({ background }) => {
  if (background == "#1F323D") {
    return (
      <div
        className={`relative overflow-hidden h-[140px] w-[1248px] z-10 rounded-2xl mx-auto flex justify-around  items-center bg-['${background}']`}
      >
        <h1 className="text-white font-sans font-bold text-2xl text-start ">
          Join the International Association of <br /> Facial Growth Guidance
        </h1>
        <div>
          <button className="rounded-full px-2 py-1 text-center flex justify-center bg-[#D3F375]">
            Become a member <ChevronRightIcon className="size-5" />
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

  return (
    <>
      <div
        className={`relative overflow-hidden h-[140px] w-[1248px] z-10 rounded-2xl mx-auto flex justify-around  items-center bg-[#E3E9ED]`}
      >
        <h1 className="ms-10 text-[#435A65] font-sans font-bold text-2xl text-start ">
          Find an Orthotropics practitioner <br /> near you
        </h1>
        <div>
          <button className="rounded-full px-2 py-1 text-center flex justify-center bg-[#D3F375]">
            Find a practitioner <ChevronRightIcon className="size-5" />
          </button>
        </div>
        <img
          src={transLogo}
          alt=""
          className="w-full absolute -z-10 opacity-20 "
        />
      </div>
    </>
  );
};

export default FindersCard;
