import { CheckIcon } from "@heroicons/react/24/solid";

export const ToggleButton = () => {
  return (
    <>
      <div className="flex flex-col p-3  justify-center items-center  my-10 px-3 overflow-hidden">
        <div className="flex flex-col">
          <div className="flex justify-between items-center rounded-full ring-4 ring-meroColor-platinum-10  bg-transparent">
            <div className="order-2 rounded-full px-4 py-3 bg-meroColor-platinum-10  text-xl font-medium text-meroColor-electric-indigo">
              <div className="flex items-center justify-between px-3">
                <CheckIcon className="size-6" />
                <h1> Pro</h1>
              </div>
            </div>
            <div className="order-2 rounded-full px-4 py-3 bg-meroColor-platinum-10  text-xl font-medium text-meroColor-electric-indigo">
              <div className="flex items-center justify-between px-3">
                <CheckIcon className="size-6" />
                <h1> Basic</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5">
          <h1>@$14.99 a year</h1>
          <h1>or $1.75 a month</h1>{" "}
        </div>
      </div>
    </>
  );
};
