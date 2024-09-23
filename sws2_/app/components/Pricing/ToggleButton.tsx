import { CheckIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface TToggler {
  id:number;
  backGroundColor:string;
  bottonName:string;
  bottonIcon:ReactNode;
  textColor:string;
}



const Toggler : TToggler[]= [
  {
    id: 1,    
    backGroundColor: "transparent",
    bottonName: "Basic",
    bottonIcon: <CheckIcon className="size-6" />,
    textColor: "text-meroColor-electric-indigo",
  },

  {
    id: 2,
    backGroundColor: "transparent",
    bottonName: "Pro",
    bottonIcon: <CheckIcon className="size-6" />,
    textColor: "text-meroColor-electric-indigo",
  },
];


/* 
interface TInnerToggler {

}
 */
export const ToggleButton :<>= () => {
  return (
    <>
      <div className="flex flex-col p-3 justify-center items-center my-10 px-3 overflow-hidden">
        <div className="flex   flex-col">
          <div className="flex justify-between items-center rounded-full ring-4 ring-meroColor-platinum-10  bg-transparent">
            <InnerToggler
              backGroundColor="bg-meroColor-platinum-10 "
              bottonName="Pro"
              bottonIcon={<CheckIcon className="size-6" />}
              textColor="text-meroColor-electric-indigo"
            />

            <InnerToggler
              backGroundColor="transparent"
              bottonName="Basic"
              bottonIcon={<CheckIcon className="size-6" />}
              textColor="text-meroColor-electric-indigo"
            />
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

// ............

interface TInnterToggler {
  bottonIcon: ReactNode;
  bottonName: string;
  textColor: string;
  backGroundColor: string;
}

const InnerToggler: React.FC<TInnterToggler> = ({
  bottonIcon,
  bottonName,
  textColor,
  backGroundColor,
}) => {
  return (
    <>
      <div
        className={`rounded-full px-4 py-3 text-xl font-medium  ${textColor}`}
      >
        <div
          className={`flex items-center justify-between px-3 ${backGroundColor}`}
        >
          {bottonIcon}
          <h1 className="text-meroColor-platinum-10"> {bottonName}</h1>
        </div>
      </div>
    </>
  );
};
