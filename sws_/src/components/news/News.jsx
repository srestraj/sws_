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
  {
    id: 5,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
  {
    id: 6,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
];

const News = () => {
  return (
    <>
      <div className="relative h-[696px] flex flex-col justify-center items-center overflow-hidden">
        <h1 className="font-sans font-bold text-light-green20 text-4xl absolute top-[96px] left-[96px] leading-4">
          Latest news and blogs
        </h1>
        {/* <div className="text-light-grey20">view all</div> */}
        <div className="flex rounded-2xl absolute top-[204px] overflow-x-scroll no-scrollbar overflow-y-hidden whitespace-nowrap w-[90%]">
          {newsData?.map((latestNews) => (
            <div
              key={latestNews.id}
              className=" bg-light-white20 rounded-md mx-2 relative ps-3 pe-3 h-[308px] w-[308px] pt-8 pb-4 flex flex-col leading-6  "
            >
              <h1 className="font-semibold font-sans pb-6 ">
                {latestNews.title}
              </h1>
              <p className="font-inter p-1  text-wrap ">
                {latestNews.descriptions}
              </p>
              <div className="absolute bottom-0 mb-3 bg-black flex justify-center items-center rounded-full size-8 p-1 text-white">
                <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end absolute top-[560px] left-[1304px]">
          <div className="flex justify-between ">
            <button className="border-dotted text-light-green20 font-medium rounded-full bg-light-white20 bg-opacity-70 mx-1 p-2">
              <ArrowLeftIcon className="size-9 p-1" />
            </button>
            <button className="border-dotted text-light-green20 font-medium rounded-full bg-light-white20 bg-opacity-70 mx-1 p-2">
              <ArrowRightIcon className="size-9 p-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
