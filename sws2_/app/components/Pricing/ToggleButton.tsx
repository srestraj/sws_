import { CheckIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface IInnterToggler {
  bottonIcon: ReactNode;
  bottonName: string;
  textColor: string;
  backGroundColor: string;
}

interface IToggler {
  id: number;
  backGroundColor: string;
  bottonName: string;
  bottonIcon: ReactNode;
  textColor: string;
}

const Toggler: IToggler[] = [
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



src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658289366fd3d02d1635fa13_iPhone14-space-black-min.svg"

<img src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201.png" alt="" sizes="(max-width: 767px) 34vw, (max-width: 991px) 27vw, 17vw" srcset="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be830842ef9a5a953cb_PursePulse%20Mockup%201.png 1080w" class="sliding-mockup-2" style="will-change: filter, transform; filter: brightness(20%); transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">


<img src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205.png" alt="" sizes="(max-width: 767px) 34vw, (max-width: 991px) 27vw, 17vw" srcset="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be70d5814fb1b250b93_PursePulse%20Mockup%205.png 1080w" class="sliding-mockup-3" style="will-change: filter, transform; filter: brightness(20%); transform: translate3d(0px, -200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">


<img src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png" alt="" sizes="(max-width: 767px) 34vw, (max-width: 991px) 27vw, 17vw" srcset="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png 1080w" class="sliding-mockup-4" style="will-change: filter, transform; filter: brightness(23.616%); transform: translate3d(0px, -300%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">

<img src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png" alt="" sizes="(max-width: 767px) 34vw, (max-width: 991px) 27vw, 17vw" srcset="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/658489c5b45fdc023016876d_PursePulse%20Mockup%204.png 1080w" class="sliding-mockup-4" style="will-change: filter, transform; filter: brightness(23.616%); transform: translate3d(0px, -300%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">

<img src="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203.png" alt="" sizes="(max-width: 767px) 34vw, (max-width: 991px) 27vw, 17vw" srcset="https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203-p-500.png 500w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203-p-800.png 800w, https://cdn.prod.website-files.com/657abcc11bc331a5ef8b2a0a/65828be92e88def35a50e9aa_PursePulse%20Mockup%203.png 1080w" class="sliding-mockup-5" style="will-change: filter, transform; filter: brightness(100%); transform: translate3d(0px, -395.48%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">


 

*/
/* 
interface TInnerToggler {

}
 */
export const ToggleButton: React.FC = () => {
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

const InnerToggler: React.FC<IInnterToggler> = ({
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
