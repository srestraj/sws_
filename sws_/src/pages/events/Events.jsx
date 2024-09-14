import logo from "../../assets/iafgg.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Events = ({ heading = "Events", slug = "" }) => {
  const datas = [
    {
      id: 1,
      title:
        "How to Guide Facial Growth in Kids (Introduction To Orthotropics and Records)",
      description:
        "If not YOU, than WHO? Your eyes recognize that something is wrong when you see these gummy smiles. Guess what? It is not genetic. It is improper g",
      day: [],
      months: "October 2024",
      images: "",
    },

    {
      id: 2,
      title:
        "How to Guide Facial Growth in Kids (Early Interception 3-6 Yr Olds)",
      description:
        "If not YOU, than WHO? Your eyes recognize that something is wrong when you see these gummy smiles. Guess what? It is not genetic. It is improper growth, and you […]",
      day: [],

      months: "January 2025",
      images: "",
    },
  ];
  return (
    <>
      <div className="relative  flex flex-row h-[208px]">
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

      <div className="p-2 flex ">
        <button className="text-sm rounded-md border border-black text-center px-2 py-1 mx-2 hover:text-white font-bold hover:bg-light-green40">
          Today
        </button>
        <h1 className="mx-2 font-semibold text-xl font-sans">Upcoming</h1>
        <button className="mx-2 ">
          <ChevronDownIcon className="size-4" />
        </button>
      </div>

      <div>
        {datas?.map((data) => (
          <div className="relative">
            <div className="flex">
              <h1 className="absolute"> {data.months}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
