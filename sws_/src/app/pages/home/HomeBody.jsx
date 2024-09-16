import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeBody = () => {
  const data = useSelector((state) => state.home);

  return (
    <div className="grid grid-cols-2 text-light-green30 gap-10 w-ful ">
      {data.map((datass) => (
        <div
          className="relative flex flex-col text-start py-3 ps-[150px] pe-[120px] rounded-3xl"
          key={datass.id}
        >
          <h1 className="text-4xl font-medium text-light-black30 py-2">
            {datass.topic}
          </h1>
          <span className="text-light-black30 py-1">{datass.slug}</span>

          <div className="py-6 ps-1 leading-10">
            {datass.inn.map((innerData) => (
              <div
                className="flex font-bold leading-10 p-1 "
                key={innerData.id}
              >
                <div className=" bg-light-green30 flex justify-center items-center rounded-full size-8 p-1 text-light-white10">
                  <ArrowRightIcon className=" hover:translate-x-1 text-light-white10 duration-200 transition-transform" />
                </div>
                <li className="list-none mx-2 underline">
                  {innerData.listsInfo}
                </li>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0  ms-2">
            <NavLink
              to={datass.path}
              className="text-sm underline text-light-black30 flex"
            >
              {datass.visitlinkTitle}
              <div className="flex justify-center items-center rounded-full size-6 p-1 ms-1">
                <ArrowRightIcon className="hover:translate-x-1 text-light-black30 duration-200 transition-transform" />
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBody;
