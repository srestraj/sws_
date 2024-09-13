import logo from "../../assets/iafgg.svg";

const Events = ({ heading = "Events", slug = "" }) => {
  return (
    <>
      <div className="relative  flex flex-row h-[488px]">
        <div className="p-1 flex flex-col">
          <h1 className="mt-6 text-5xl font-extrabold  text-[#1F323D]  tracking-wider">
            {heading}
          </h1>
          <p className="text-sm">{slug}</p>
        </div>
        <div className="w-[849px] h-[881.56px] absolute top-[-120.58px] left-[967px] opacity-25">
          <img src={logo} alt="" className=" w-3/4" />
        </div>
      </div>
    </>
  );
};

export default Events;
