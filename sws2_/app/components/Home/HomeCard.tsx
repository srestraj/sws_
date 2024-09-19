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
      { id: 1, titleOne: " Make every dollar work for", titleTwo: "you" },
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
    title: [{ id: 1, titleOne: "Make smarter budgets", titleTwo: "with AI" }],
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
      {
        id: 1,
        titleOne: "Tailor your savings plan to",
        titleTwo: "your lifestyle",
      },
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
            className="max-w-screen-2xl text-meroColor-platinum-10 grid grid-cols-2 items-center mx-auto transition-all ease-in-out overflow-hidden "
          >
            <div
              className={`${homeGroup.orderImage} grid grid-cols-1 gride items-center justify-end`}
            >
              <div className="p-10">
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
            </div>

            {homeGroup.imageHome && (
              <div
                className={`relative rounded-b-full order-1 flex justify-end items-center  
                                
                  ${
                    homeGroup.hasBorder
                      ? `border-2  border-meroColor-electric-indigo  ${homeGroup.divRotate}`
                      : ` bg-meroColor-electric-indigo ${homeGroup.divRotate}`
                  }
                `}
              >
                <div className="-rotate-180 flex items-end justify-center">
                  <Image
                    src={homeGroup.imageHome}
                    width={500}
                    height={520}
                    className={homeGroup.imageRotate + ``}
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
