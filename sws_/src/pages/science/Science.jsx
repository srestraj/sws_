import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";

const discoverData = [
  {
    id: 1,
    title: "arrow_forward Treatment Through Research, Evidence and Reasoning",
    descriptions:
      "Traditionally orthodontists have been taught that the size and shape of the jaws is inherited and most orthodontic treatment is based on this belief.",
  },

  {
    id: 2,
    title: "Orthotropics evidence",
    descriptions: "Learn about different evidences on Orthotropics.",
  },

  {
    id: 3,
    title: "arrow_forward Orthodontic evidence",
    descriptions:
      "Orthodontic clinicians in the past have been severely criticised by scientists for ignoring the scientific evidence.",
  },

  {
    id: 4,
    title: "Orthotropic vs Orthodontic evidence",
    descriptions: "Comparison between Orthotropic and Orthodontic Evidences.",
  },

  {
    id: 5,
    title: "Research projects",
    descriptions:
      "The research projects and papers can present your ideas in response to information found in the clinic, laboratory and library sources.",
  },

  {
    id: 6,
    title: "Case studies",
    descriptions: "View our latest case studies from real people.",
  },
];

const Science = () => {
  return (
    <>
      <div className="p-3 py-1">
        <h1 className="leading-2 font-semibold text-2xl font-sans ">Science</h1>
        <span className="text-sm ">Practical guidance about Orthotropics.</span>
      </div>
      <div className="p-2 grid-cols-2 grid font-sans">
        {discoverData?.map((discover) => (
          <NavLink to={"/"}>
            <div className="p-3" key={discover.id}>
              <div className="p-2 flex justify-start">
                <div className="bg-[#D9D9D9] flex justify-center items-center rounded-full size-8 p-1 text-white">
                  <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
                </div>
                <h1 className="ms-1 text-xl font-semibold">{discover.title}</h1>
              </div>
              <h1 className="p-1">{discover.descriptions}</h1>
            </div>
          </NavLink>
        ))}
      </div>
      {/* <FindersCard background={"#1F323D"} /> */}
      <FindersCard background={"#E3E9ED"} />

    </>
  );
};

export default Science;