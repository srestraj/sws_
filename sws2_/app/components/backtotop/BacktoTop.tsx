"use clinet";
import { useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

/* const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return children || null;
}; */

export const BacktoTop = () => {
  return (
    <div className="flex items-center justify-center bg-meroColor-platinum-10  mx-auto px-20 lg:px-32  py-1 opacity-50 ">
      <div className="flex items-center justify-center z-20 ">
        <ArrowUpIcon className="size-6 " />{" "}
        <h1 className="font-bold z-10 text-meroColor-black-10 ">
          {"Go back to top"}
        </h1>
      </div>
    </div>
  );
};
