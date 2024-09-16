import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import FindersCard from "../finders/FindersCard";

const News = () => {
  const newsData = useSelector((state) => state.newsfeed);

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();
  /* we are use useRef, useRef to manipulate virtual DOM elements in React */

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <>
      <FindersCard background={"#1F323D"} />

      <div className=" bg-light-green10 relative h-[696px] flex flex-col justify-center items-center overflow-hidden  mx-auto">
        <h1 className=" font-sans font-bold text-light-green20 text-4xl absolute top-40 left-40 leading-4">
          Latest news and blogs
        </h1>
        {/* <div className="text-light-grey20">view all</div> */}
        <div
          style={{
            width: "1780px",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          ref={containerRef}
          className={`flex rounded-2xl absolute top-[204px] overflow-x-scroll no-scrollbar overflow-y-hidden max-w-screen `}
        >
          {newsData?.map((latestNews) => (
            <div
              key={latestNews.id}
              className=" bg-light-white10 mx-1 px-5 rounded-2xl relative h-[308px] pt-8 pb-4 flex flex-col leading-6 min-w-full md:min-w-96 "
            >
              <h1 className="font-semibold font-sans pb-6 text-2xl">
                {latestNews.title}
              </h1>
              <p className="font-inter p-1 text-wrap text-xl">
                {latestNews.descriptions}
              </p>
              <div className="absolute bottom-0 mb-3 bg-black flex justify-center items-center rounded-full size-8 p-1 text-white">
                <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end absolute bottom-0 right-0 me-44">
          <div className="flex justify-between ">
            <button
              onClick={() => handleScroll(-200)}
              className="border-dotted text-light-green20 font-medium rounded-full bg-light-grey10 bg-opacity-70 mx-1 p-2"
            >
              <ArrowLeftIcon className="size-8 p-1" />
            </button>
            <button
              onClick={() => handleScroll(200)}
              className="border-dotted text-light-green20 font-medium rounded-full bg-light-grey10 bg-opacity-70 mx-1 p-2"
            >
              <ArrowRightIcon className="size-8  p-1" />
            </button>
          </div>
        </div>
      </div>

      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default News;
