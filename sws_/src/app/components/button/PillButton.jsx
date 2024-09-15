import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PillButton = ({ title, backgroundColor, textColor }) => {
  return (
    <button
      className={`rounded-full ps-3 items-center py-1 text-center flex justify-center ${backgroundColor} ${textColor} font-inter`}
    >
      {title ? title : ""}
      <ChevronRightIcon className="size-5 mx-2 hover:translate-x-1 duration-200 transition-transform" />
    </button>
  );
};

export default PillButton;
