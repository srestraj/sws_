"use clinet";
import Image from "next/image";
import ButtonPills from "../../components/ButtonPills";
import homeImage from "../../assets/homeimage.png";
import homeImage2 from "../../assets/homeImage2.png";
import homeImage3 from "../../assets/homeImage3.png";

const data = [
  {
    id: 1,
    title: " Make every dollar work for",
    slug: "Navigating finances can be tough, but PursePulse is here to make it easy. Together, let's save smart, spend wisely, see it all, and regain control of your money story.",
    imageHome: homeImage,
    position: "top",
  },
  {
    id: 2,
    title: "Make smarter budgets with AI",
    slug: "Ditch the pen and paper! Our AI-driven smart technology creates a personalized budget, adapting to your lifestyle for effortless financial planning.",
    imageHome: homeImage2,
    position: "left",
  },
  {
    id: 3,
    title: "Tailor your savings plan to your lifestyle",
    slug: "Dream big, save bigger! PursePulse lets you set financial goals like retirement savings. Our app crafts a savings plan customized to your income and expenses, making your dreams more achievable.",
    imageHome: homeImage3,
    position: "right",
  },
  {
    id: 4,
    title: "Secure your financial future",
    slug: "Equip yourself with all the tools you need to empower you on the path to lasting financial security.",
    imageHome: null,
    position: "center",
  },
];

const BodyCard = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey w-full ">
        <div className="flex items-center flex-col md:flex-row md:justify-between  px-10 lg:px-40 transition-all ease-in-out">
          <div className="">
            <h1 className="text-7xl font-extrabold max-w-2xl pt-40 mb-4">
              {"Make every dollar work for "}
              <span className="text-meroColor-electric-indigo">you</span>
            </h1>
            <div className="py-6  md:text-wrap">
              <p className="min-w-sm max-w-xl md:max-w-xl mb-6 ">
                {
                  "Navigating finances can be tough, but PursePulse is here to make it easy. Together, let's save smart, spend wisely, see it all, and regain control of your money story."
                }
              </p>
              <ButtonPills
                btnName="Start free trail"
                hoverColor="meroColor-light-grey"
                ringColor="gray"
                textColor="gray"
                hoverTextColor="gray"
              />
            </div>
          </div>

          <div className="">
            <Image
              src={homeImage}
              width={500}
              height={700}
              className="bg-meroColor-electric-indigo rounded-b-full"
              alt="homeimg_"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyCard;
