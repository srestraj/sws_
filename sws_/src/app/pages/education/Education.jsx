import { ArrowRightIcon } from "@heroicons/react/24/solid";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Education = () => {
  const educationData = useSelector((state) => state.education);

  return (
    <>
      <HeadBanner
        headingsTitle={"Education"}
        headingSlug={"Practical guidance about Orthotropics."}
      />

      <div className="p-2 grid-cols-2 grid font-sans">
        {educationData?.map((educations) => (
          <div className="p-3" key={educations.id}>
            <NavLink to={`/education/${educations.id}`}>
              <div className="p-2 flex justify-start  items-center">
                <div className="bg-light-grey10 flex justify-center items-center rounded-full size-8 p-1 text-white">
                  <ArrowRightIcon className=" hover:translate-x-1 text-white duration-200 transition-transform" />
                </div>
                <h1 className="ms-3 text-xl font-semibold leading-10">
                  {educations.title}
                </h1>
              </div>
              <h1 className="p-1 max-w-4xl mx-4">{educations.descriptions}</h1>
            </NavLink>
          </div>
        ))}
      </div>

      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Education;
