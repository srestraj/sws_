import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";

const Discover = () => {
  const discoverData = useSelector((state) => state.discover);

  return (
    <>
      <HeadBanner
        headingsTitle={"Discover"}
        headingSlug={"Practical guidance about Orthotropics."}
      />
      <div className="p-2 grid-cols-2 grid font-sans">
        {discoverData?.map((discover) => (
          <NavLink to={`/discover/${discover.id}`}>
            <div className="p-3" key={discover.id}>
              <div className="p-2 flex justify-start  items-center">
                <div className="bg-light-grey10 flex justify-center items-center rounded-full size-8 p-1 text-light-white10">
                  <ArrowRightIcon className=" hover:translate-x-1 text-light-white10 duration-200 transition-transform" />
                </div>
                <h1 className="ms-3 text-xl font-semibold leading-10">
                  {discover.title}
                </h1>
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
