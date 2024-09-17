"use clinet";
import Image from "next/image";
import ButtonPills from "../ButtonPills";
import homeImage from "../../assets/homeimage.png";
import homeImage2 from "../../assets/mobileleft.png";
import homeImage3 from "../../assets/mobileright.png";

const data = [
  {
    id: 1,
    title: [
      { id: 1, titleOne: " Make every dollar work" },
      { id: 2, titleTwo: "for" },
    ],
    slug: "Navigating finances can be tough, but PursePulse is here to make it easy. Together, let's save smart, spend wisely, see it all, and regain control of your money story.",
    imageHome: homeImage,
    divRotate: "rotate-0",
    imageRotate: "-rotate-180",
    buttonPresent: true,
    orderImage: "order-1",
  },
  {
    id: 2,
    title: [
      { id: 1, titleOne: "Make smarter budgets" },
      { id: 2, titleTwo: "with AI" },
    ],
    slug: "Ditch the pen and paper! Our AI-driven smart technology creates a personalized budget, adapting to your lifestyle for effortless financial planning.",
    imageHome: homeImage2,
    divRotate: "-rotate-90",
    imageRotate: "-rotate-90",
    buttonPresent: false,
    orderImage: "order-3",
  },
  {
    id: 3,
    title: [
      { id: 1, titleOne: "Tailor your savings plan to" },
      { id: 2, titleTwo: "your lifestyle" },
    ],
    slug: "Dream big, save bigger! PursePulse lets you set financial goals like retirement savings. Our app crafts a savings plan customized to your income and expenses, making your dreams more achievable.",
    imageHome: homeImage3,
    divRotate: "rotate-90",
    imageRotate: "rotate-90",
    buttonPresent: false,
    orderImage: "order-1",
  },
  // {
  //   id: 4,
  //   title: [
  //     { id: 1, titleOne: "Secure your" },
  //     { id: 2, titleTwo: " financial future" },
  //   ],
  //   slug: "Equip yourself with all the tools you need to empower you on the path to lasting financial security.",
  //   imageHome: "",
  //   rotate: "center",
  //   buttonPresent: false,
  // },
];

const HomeCard = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey w-full ">
        {data?.map((homeGroup) => (
          <div
            key={homeGroup.id}
            className="flex items-center  md:flex-row md:justify-between  px-10 lg:px-40 transition-all ease-in-out"
          >
            <div className={`${homeGroup.orderImage}`}>
              {homeGroup.title.map((homeTitle) => (
                <h1
                  key={homeTitle.id}
                  className="text-7xl font-extrabold max-w-2xl mb-4 text-wrap"
                >
                  {homeTitle.titleOne}
                  <span className="text-meroColor-electric-indigo">
                    {homeTitle.titleTwo}
                  </span>
                </h1>
              ))}
              <div className="py-6  md:text-wrap">
                <p className="min-w-sm max-w-xl md:max-w-xl mb-6 ">
                  {homeGroup.slug}
                </p>
                {homeGroup.buttonPresent == true && (
                  <ButtonPills
                    btnName="Start free trail"
                    hoverColor="hover:ring-meroColor-light-grey"
                    ringColor="gray"
                    textColor="gray"
                    hoverTextColor=""
                  />
                )}
              </div>
            </div>
            <div
              className={`bg-meroColor-electric-indigo rounded-b-full ${homeGroup.divRotate} order-1`}
            >
              {homeGroup.imageHome && (
                <div className="-rotate-180 flex items-center scale-75 justify-center">
                  <Image
                    src={homeGroup.imageHome}
                    width={500}
                    height={700}
                    className={homeGroup.imageRotate}
                    alt={"homeGroup.imageHome"}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCard;
