("use clinet");
import Image, { StaticImageData } from "next/image";
import userIcon from "../../assets/userIcon.webp";
import walletIcon from "../../assets/walletIcon.webp";
import paperIcon from "../../assets/paperIcon.webp";
import ideaIcon from "../../assets/ideaIcon.png";
import homeImage3 from "../../assets/mobileright.png";

interface IButtomData {
  id: number;
  title: string;
  icons: StaticImageData;
  description: string;
}

const Features: React.FC = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey w-full ">
        <div className="flex items-center flex-col md:flex-row md:justify-between  transition-all ease-in-out">
          <div className="mx-10 my-10">
            <HeadingElement />
            <CardElement />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

const HeadingElement :React.FC= () => {
  return (
    <>
      <div className="text-center">
        <h1 className="md:text-6xl font-bold flex flex-col  min-w-max">
          Secure your
          <span className="text-meroColor-electric-indigo ">
            {"  financial future"}
          </span>
        </h1>
        <p className=" text-xl text-meroColor-platinum-10 font-light  leading-8 my-2 py-2 min-w-max">
          Equip yourself with all the tools you need to empower you on the path
          to lasting financial security.
        </p>
      </div>
    </>
  );
};

const CardElement: React.FC = () => {
  const dataBottom: IButtomData[] = [
    {
      id: 1,
      title: "Unlock insights from experts",
      icons: userIcon,
      description:
        "PursePulse categorizes expenses, providing tailored advice to help you make informed financial decisions.",
    },
    {
      id: 2,
      title: "Stay on top of upcoming bills",
      icons: paperIcon,
      description:
        "PursePulse's Bill Tracker keeps you organized with notifications for upcoming bills and subscriptions, ensuring timely payments.",
    },
    {
      id: 3,
      title: "Get live updates on your investments",
      icons: ideaIcon,
      description:
        "PursePulse's Investment Watchdog provides real-time updates on your investments, offering expert insights for financial growth.",
    },
    {
      id: 4,
      title: "Assess your financial well-being",
      icons: walletIcon,
      description:
        "PursePulse's Financial Health Check assigns a score based on expert analysis, guiding you toward a healthier financial life.",
    },
  ];
  return (
    <div className="text-meroColor-light-grey  grid grid-cols-2  md:flex items-center md:flex-row md:justify-center transition-all ease-in-out  ">
      {dataBottom.map((homeFooter) => (
        <div
          className="flex flex-col justify-center text-center items-center"
          key={homeFooter.id}
        >
          <Image src={homeFooter.icons} width={80} height={80} alt="btmm_img" />

          <h1 className="text-3xl font-medium text-center text-meroColor-white-10 min-w-screen-sm py-2">
            {homeFooter.title}
          </h1>

          <p className="text-meroColor-dark-gray  text-2xl m-1">
            {homeFooter.description}
          </p>
        </div>
      ))}
    </div>
  );
};
