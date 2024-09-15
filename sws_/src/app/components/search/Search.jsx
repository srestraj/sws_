import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
  const [result, setResult] = useState([]);
  const [textSearch, setTextSearch] = useState({ searching: "" });
  const navigate = useNavigate();

  const handelChnage = (e) => {
    const { name, value } = e.target;

    setTextSearch({
      ...textSearch,
      [name]: value,
    });

    // logics...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult([...result, textSearch]);
    setTextSearch({ searching: "" });
    navigate("/search-error");
  };

  const handleFinder = () => {
    // Navigate("/search-error");
  };

  // console.log(result.map(dd=>dd));
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-[378px] h-[48px] mt-4 p-2">
        <div className="relative ">
          <input
            name="searching"
            value={textSearch.searching}
            onChange={handelChnage}
            type="text"
            className="px-2 m-0 focus:outline-none z-20 bg-lime-200 p-1"
          />
          <div
            className={`absolute top-1 right-0 flex justify-center items-center `}
          >
            <XMarkIcon className="size-6" />
          </div>
        </div>

        <button className=" z-20 flex items-center justify-center">
          <MagnifyingGlassIcon className="size-8 bg-[#237688] text-[white]" />
        </button>
      </div>
    </form>
  );
};

export default Search;
