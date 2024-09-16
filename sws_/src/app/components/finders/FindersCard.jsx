import darkLogo from "../../../assets/innerCardlogo.svg";
import transparentLogo from "../../../assets/transparentLogo.svg";
import PillButton from "../button/PillButton";

const FindersCard = ({ background }) => {
  if (background == "#27606D") {
    return (
      <div className="max-w-screen-2xl px-10 mx-auto">
        <div
          className={`relative overflow-hidden h-[140px] mt-10 z-10 rounded-2xl flex justify-evenly items-center bg-['${background}']`}
        >
          <h1 className="text-light-white10 font-sans font-bold text-2xl text-start w-2/3 ">
            Join the International Association of <br /> Facial Growth Guidance
          </h1>
          <div>
            <PillButton
              title={"Become a member"}
              backgroundColor={"bg-light-yellow20"}
            />
          </div>
          <img
            src={darkLogo}
            alt="logo_img"
            className="w-full absolute -z-20 opacity- "
          />
        </div>
      </div>
    );
  }
  // background: ;

  if (background == "#E3E9ED") {
    return (
      <>
        <div className="max-w-screen-2xl px-10 mx-auto">
          <div
            className={`relative overflow-hidden h-[140px] mb-10 z-10 rounded-2xl flex justify-evenly items-center bg-['${background}`}
          >
            <h1 className="text-light-gray20 font-sans font-bold text-2xl text-start w-2/3">
              Find an Orthotropics practitioner <br /> near you
            </h1>
            <PillButton
              title={"Find a practitioner"}
              backgroundColor={"bg-light-yellow20"}
            />
            <img
              src={transparentLogo}
              alt="logo_img"
              className="w-full  absolute -z-10 opacity-20 "
            />
          </div>
        </div>
      </>
    );
  }
};

export default FindersCard;
