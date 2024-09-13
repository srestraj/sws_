import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

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
      <div className="mb-3 p-10 my-10">
        <h1 className="font-sans font-bold text-[#304E5E] text-4xl p-10 pb-0 pt-3">
          Latest news and blogs
        </h1>
        <div className="flex rounded-2xl relative my-2">
          {newsData?.map((latestNews) => (
            <div
              key={latestNews.id}
              className="bg-[#F6F9F9] ps-10 pe-10 pt-8 pb-8 relative"
            >
              <h1 className="font-semibold font-sans">{latestNews.title}</h1>
              <p className="font-inter">{latestNews.descriptions}</p>
              <div className="absolute bottom-0  bg-black flex justify-center items-center rounded-full size-8 p-1 text-white">
                <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
              </div>
            </div>
          ))}
          <div className="absolute my-3 flex  top-[90%] right-[47px]">
            <div className="flex justify-between">
              <button className="border-dotted text-[#304E5E] font-medium bg-[#F6F9F9] p-2">
                <ArrowLeftIcon className="size-9 p-1 " />
              </button>
              <button className="border-dotted text-[#304E5E] font-medium bg-[#F6F9F9] p-2">
                <ArrowRightIcon className="size-9 p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;