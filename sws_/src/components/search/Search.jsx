import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="flex w-[378px] h-[48px] mt-4 p-2" >
      <input type="text" className="px-2 m-0 focus:outline-none " />
      <button className="">
        <MagnifyingGlassIcon className="size-8 bg-[#237688] text-[white]" />
      </button>
    </div>
  );
};

export default Search;
