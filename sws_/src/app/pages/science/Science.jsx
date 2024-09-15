import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink, Navigate } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";
import { scienceSinglePage } from "../../features/science/scienceSlice";

const Science = () => {
  const discoverData = useSelector((state) => state.science);

  const dispatch = useDispatch();

  const handleRedirect = (sendTo) => {
    // <Navigate to={"/"} />;

    dispatch(scienceSinglePage(sendTo));
  };
  return (
    <>
      <HeadBanner
        headingsTitle={"Science"}
        headingSlug={"Practical guidance about Orthotropics."}
      />

      <div className="p-2 grid-cols-2 grid font-sans">
        {discoverData?.map((discover) => (
          <div
            className="p-3"
            key={discover.id}
            onClick={() => handleRedirect(discover.id)}
          >
            <NavLink to={`/science/${discover.id}`}>
              <div className="p-2 flex justify-start items-center">
                <div className="bg-[#D9D9D9] flex justify-center items-center rounded-full size-8 p-1 text-white">
                  <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
                </div>
                <h1 className="ms-3 text-xl font-semibold leading-10">
                  {discover.title}
                </h1>
              </div>
              <h1 className="p-1 max-w-4xl mx-4">{discover.descriptions}</h1>
            </NavLink>
          </div>
        ))}
      </div>
      {/* <FindersCard background={"#1F323D"} /> */}
      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Science;
