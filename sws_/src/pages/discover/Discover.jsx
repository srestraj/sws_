import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";

const discoverData = [
  {
    id: 1,
    title: "What is Orthotropics?",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 2,
    title: "Orthotropics for dental practitioners",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 3,
    title: "Orthotropics for parents",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },

  {
    id: 4,
    title: "Orthotropics for patients",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },

  {
    id: 5,
    title: "Orthotropics for the public",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 6,
    title: "Find an Orthotropist",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },
];

const Discover = () => {
  return (
    <>
      <div className="p-3 py-1">
        <h1 className="leading-2 font-semibold text-2xl font-sans ">
          Discover
        </h1>
        <span className="text-sm ">Practical guidance about Orthotropics.</span>
      </div>
      <div className="p-2 grid-cols-2 grid font-sans">
        {discoverData?.map((discover) => (
          <NavLink to={""}>
            <div className="p-3" key={discover.id}>
              <div className="p-2 flex justify-start  items-center">
                <div className="bg-light-green10 flex justify-center items-center rounded-full size-8 p-1 text-light-white10">
                  <ArrowRightIcon className=" hover:translate-x-1 text-light-white10 duration-200 transition-transform" />
                </div>
                <h1 className="ms-3 text-xl font-semibold leading-10">{discover.title}</h1>
              </div>
              <h1 className="p-1 max-w-4xl mx-4">{discover.descriptions}</h1>
            </div>
          </NavLink>
        ))}
      </div>
      <FindersCard background={"#1F323D"} />
    </>
  );
};

export default Discover;
