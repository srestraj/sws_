import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Logo from "../../components/Logo/Logo";

const newsData = [
  {
    id: 1,
    title: "Thinking Beyond the Teeth",
    descriptions:
      "Orthotropics represents a new way of looking at crooked teeth.",
  },

  {
    id: 2,
    title: "Treatment Through Research , Evidence and Reasoning",
    descriptions: "The current state of orthodontic evidence",
  },

  {
    id: 3,
    title: "Healthy face healthy life",
    descriptions:
      "Attractiveness has become a double-edged sword in the skin deep modern society.",
  },

  {
    id: 4,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
];

const News = () => {
  return (
    <>
      {/* <FindPractitioner
        bg={"#1F323D"}
        descriptions={
          "Join the International Association of Facial Growth Guidance"
        }
      /> */}

      <h1 className="font-bold text-xl text-[#304E5E]">
        latest news and blogs
      </h1>
      <div className="flex ">
        {newsData?.map((latestNews) => (
          <div key={latestNews.id} className="bg-[#F6F9F9]">
            <h1>{latestNews.title}</h1>
            <p>{latestNews.descriptions}</p>
            <ArrowRightCircleIcon className="size-7" />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <div className="flex justify-between">
          <button className="border-dotted text-[#304E5E] font-medium">
            <ArrowLeftIcon className="size-6" />
          </button>
          <button className="border-dotted">
            <ArrowRightIcon className="size-6" />
          </button>
        </div>
      </div>

      <div className="container">
        <FindPractitioner bg={"#E3E9ED"} />
      </div>
    </>
  );
};

export default News;

const FindPractitioner = ({ bg }) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-[#435A65] font-sans font-bold text-2xl  ">
          Find an Orthotropics practitioner <br /> near you
        </h1>
      </div>
      <div>
        <button className="rounded-full px-2 py-1 text-center flex  bg-[#D3F375] text-sm">
          Find a practitioner <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};
