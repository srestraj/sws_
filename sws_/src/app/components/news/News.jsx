import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

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
      <div className="relative h-[696px] flex flex-col justify-center items-center overflow-hidden">
        <h1 className="font-sans font-bold text-light-green20 text-4xl absolute top-[96px] left-[96px] leading-4">
          Latest news and blogs
        </h1>
        {/* <div className="text-light-grey20">view all</div> */}
        <div
          style={{
            width: "900px",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          ref={containerRef}
          className={`  flex rounded-2xl absolute top-[204px] overflow-x-scroll no-scrollbar overflow-y-hidden whitespace-nowrap w-[90%]`}
        >
          {newsData?.map((latestNews) => (
            <div
              key={latestNews.id}
              className=" bg-light-white20 rounded-md mx-2 relative ps-3 pe-3 h-[308px] w-[308px] pt-8 pb-4 flex flex-col leading-6  "
            >
              <h1 className="font-semibold font-sans pb-6 ">
                {latestNews.title}
              </h1>
              <p className="font-inter p-1 text-wrap ">
                {latestNews.descriptions}
              </p>
              <div className="absolute bottom-0 mb-3 bg-black flex justify-center items-center rounded-full size-8 p-1 text-white">
                <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end absolute top-[580px] left-[1004px]">
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
    </>
  );
};

export default News;
