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
      { id: 1, titleOne: " Make every dollar work for" },
      { id: 2, titleTwo: "you" },
    ],
    slug: "Navigating finances can be tough, but PursePulse is here to make it easy. Together, let's save smart, spend wisely, see it all, and regain control of your money story.",
    imageHome: homeImage,
    divRotate: "rotate-0",
    imageRotate: "-rotate-180",
    buttonPresent: true,
    hasBorder: false,
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
    hasBorder: false,
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
    hasBorder: true,
    orderImage: "order-1",
  },
];

const HomeCard = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black">
        {data?.map((homeGroup) => (
          <div
            key={homeGroup.id}
            className="max-w-screen-2xl text-meroColor-light-grey flex-col sm:flex items-center md:flex-row md:justify-center transition-all ease-in-out pb-10 overflow-hidden"
          >
            <div
              className={`${homeGroup.orderImage} lg:mx-28 lg:p-20 flex-col p-4   items-center`}
            >
              <div>
                {homeGroup.title.map((homeTitle) => (
                  <h1
                    key={homeTitle.id}
                    className={`text-7xl font-extrabold mb-4  leading-tighter inline-block `}
                  >
                    <span> {homeTitle.titleOne}</span>
                    <span className="text-meroColor-electric-indigo">
                      {homeTitle.titleTwo}
                    </span>
                  </h1>
                ))}
              </div>
              <div className="px-2 md:text-wrap">
                {homeGroup.imageHome ? (
                  <p className="min-w-screen-2xl max-w-xl md:max-w-xl mb-6 ">
                    {homeGroup.slug}
                  </p>
                ) : (
                  <p className="min-w-screen-sm max-w-xl md:max-w-full mb-6 text-nowrap">
                    {homeGroup.slug}
                  </p>
                )}
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
            {homeGroup.imageHome && (
              <div
                className={
                  homeGroup.hasBorder
                    ? `py-99 border-2  border-meroColor-electric-indigo rounded-b-full  ${homeGroup.divRotate} order-1`
                    : `py-99 pb-20 lg:mx-20 bg-meroColor-electric-indigo rounded-b-full ${homeGroup.divRotate} order-1`
                }
              >
                <div className="-rotate-180 flex items-start justify-start z-10 ">
                  <Image
                    src={homeGroup.imageHome}
                    width={500}
                    height={520}
                    className={homeGroup.imageRotate + ` z-20`}
                    alt={"homeGroup.imageHome "}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCard;
