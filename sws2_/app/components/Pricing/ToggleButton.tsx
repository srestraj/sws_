import { CheckIcon } from "@heroicons/react/24/solid";

export const ToggleButton = () => {
  return (
    <>
      <div className="flex justify-center items-center py-1">
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

          {/* <div className="order-2 rounded-full px-4 py-3 bg-meroColor-platinum-10  text-xl font-medium text-meroColor-electric-indigo">
              <div className="flex items-center justify-between px-3">
                <CheckIcon className="size-6" />
                 
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};
