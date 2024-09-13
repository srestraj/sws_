import { ArrowRightIcon } from "@heroicons/react/24/solid";
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

const Education = () => {
  return (
    <>
      <div className="p-3 py-1">
        <h1 className="leading-2 font-semibold text-2xl font-sans">
          Education
        </h1>
        <span className="text-sm">Practical guidance about Orthotropics.</span>
      </div>

      <div className="p-2 grid-cols-2 grid font-sans">
        {discoverData?.map((discover) => (
          <div className="p-3" key={discover.id}>
            <div className="p-2 flex justify-start">
              <div className="bg-[#D9D9D9] flex justify-center items-center rounded-full size-8 p-1 text-white">
                <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
              </div>
              <h1 className="ms-1 text-xl font-semibold">{discover.title}</h1>
            </div>
            <h1 className="p-1">{discover.descriptions}</h1>
          </div>
        ))}
      </div>

      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Education;
