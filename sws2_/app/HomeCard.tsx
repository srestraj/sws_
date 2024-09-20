"use clinet";
import Image from "next/image";
import ButtonPills from "./components/ButtonPills";
import homeImage from "../../assets/homeimage.png";
import homeImage2 from "../../assets/mobileleft.png";
import homeImage3 from "../../assets/mobileright.png";

const data = [
  {
    id: 1,
    title: [
      { id: 1, titleOne: " Make every dollar work for", titleTwo: "you" },
    ],
    slug: "Navigating finances can be tough, but PursePulse is here to make it easy. Together, let's save smart, spend wisely, see it all, and regain control of your money story.",
    imageHome: homeImage,
    buttonPresent: true,
    hasBorder: false,
    orderImage: "order-last",
    borderRadius: "rounded-b-full",
    overflowHidden: true,
  },
  {
    id: 2,
    title: [{ id: 1, titleOne: "Make smarter budgets", titleTwo: "with AI" }],
    slug: "Ditch the pen and paper! Our AI-driven smart technology creates a personalized budget, adapting to your lifestyle for effortless financial planning.",
    imageHome: homeImage2,
    buttonPresent: false,
    hasBorder: false,
    orderImage: "md:order-first",
    borderRadius: "rounded-r-full",
    overflowHidden: false,
  },
  {
    id: 3,
    title: [
      {
        id: 1,
        titleOne: "Tailor your savings plan to",
        titleTwo: "your lifestyle",
      },
    ],
    slug: "Dream big, save bigger! PursePulse lets you set financial goals like retirement savings. Our app crafts a savings plan customized to your income and expenses, making your dreams more achievable.",
    imageHome: homeImage3,
    buttonPresent: false,
    hasBorder: true,
    orderImage: "order-last",
    borderRadius: "rounded-l-full",
    overflowHidden: true,
  },
];

const HomeCard = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black">
        {data?.map((homeGroup) => (
          <div
            key={homeGroup.id}
            className={`max-w-screen-3xl text-meroColor-platinum-10 grid md:grid-cols-2 items-center mx-auto transition-all ease-in-out ${
              homeGroup.overflowHidden ? "" : "md:py-48"
            }`}
          >
            <div className="p-10 place-self-center">
              {homeGroup.title.map((homeTitle) => (
                <div key={homeTitle.id}>
                  <h1
                    className={`text-7xl font-extrabold mb-4 leading-tighter inline-block `}
                  >
                    <span> {homeTitle.titleOne}</span>
                    <span className="text-meroColor-electric-indigo">
                      {" "}
                      {homeTitle.titleTwo}
                    </span>
                  </h1>
                  <p className="min-w-screen-2xl max-w-xl md:max-w-xl mb-6 ">
                    {homeGroup.slug}
                  </p>
                </div>
              ))}
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

            {homeGroup.imageHome && (
              <div className={`w-full ${homeGroup.orderImage} h-full relative`}>
                <div
                  className={`
                    ${homeGroup.borderRadius}
                    relative
                    w-full
                    flex
                    flex-col
                    items-center
                    justify-end
                    ${
                      homeGroup.overflowHidden
                        ? "overflow-hidden"
                        : "md:max-h-[530px] md:overflow-visible overflow-hidden"
                    }
                    ${
                      homeGroup.hasBorder
                        ? `border-2 border-r-0 border-meroColor-electric-indigo`
                        : `bg-meroColor-electric-indigo`
                    }
                  `}
                >
                  <Image
                    src={homeGroup.imageHome}
                    width={538}
                    height={750}
                    className="max-w-full inline-block"
                    alt="homeGroup.imageHome"
                  />
                  {/* <div className="-rotate-180 flex items-end justify-center">
                  </div> */}
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