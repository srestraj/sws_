import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink, Navigate } from "react-router-dom";

const BodyCard = ({ data }) => {
  return (
    <>
      <div className="p-2 grid-cols-1 sm:grid-cols-2 grid font-sans mx-auto max-w-screen-2xl">
        {data?.map((discover) => (
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
    </>
  );
};

export default BodyCard;
