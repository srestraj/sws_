("use clinet");

import { CheckIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CardsElements } from "./CardElements";
import { ToggleButton } from "./ToggleButton";
import { PricingTopElement } from "./PricingTopElement";
const pricingData = [
  {
    id: 1,
    heading: "Expert Guidance",
    discriptions:
      "Access personalized advice and insights from financial professionals to optimize your financial strategy.",
  },
  {
    id: 2,
    heading: "Priority Support",
    discriptions:
      "Enjoy expedited customer support and assistance for any inquiries or technical issues.",
  },
  {
    id: 3,
    heading: "Advanced Analytics",
    discriptions:
      "In-depth financial analytics and reports for a holistic understanding of your financial health.",
  },
  {
    id: 4,
    heading: "Exclusive Webinars",
    discriptions:
      "Participate in exclusive webinars hosted by financial experts, offering valuable insights and strategies.",
  },
  {
    id: 5,
    heading: "Customized Learning Paths",
    discriptions:
      "Receive tailored educational content and resources to enhance your financial literacy and achieve your goals.",
  },
  {
    id: 6,
    heading: "Expense Tracking",
    discriptions:
      "Monitor spending habits effortlessly with PursePulse's intuitive and user-friendly expense tracking feature.",
  },
  {
    id: 7,
    heading: "Bill Reminders",
    discriptions:
      "Never miss a due date—receive timely notifications for upcoming bills and subscriptions.",
  },
  {
    id: 8,
    heading: "Goal Setting",
    discriptions:
      "Define and track financial aspirations, from saving for a vacation to planning for retirement.",
  },
  {
    id: 9,
    heading: "Basic Insights",
    discriptions:
      "Get fundamental insights into your financial habits and progress toward your goals.",
  },
];
import mainLogo from "../../assets/logo.webp";
import Image from "next/image";

const Pricing = () => {
  return (
    <>
      <PricingTopElement />
      <div className="   bg-meroColor-electric-indigo rounded-b-none  rounded-full  md:rounded-t-[15%]  mx-10 py-10 items-center flex flex-col justify-center">
        <div className=" flex flex-col items-center scale-90">
          <ToggleButton />
          <CardsElements pricingData={pricingData} />
        </div>
      </div>
      <FormContactHeader />
    </>
  );
};

export default Pricing;

const FormContactHeader = () => {
  return (
    <>
      <div className="py-10 bg-meroColor-platinum-10 ">
        <div className="max-w-screen-2xl flex flex-col mx-auto">
          <PricingEndHeader />
          <FormContact />
        </div>
      </div>
    </>
  );
};

const PricingEndHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex-col flex px-10">
          <h1 className="text-meroColor-electric-indigo text-6xl font-bold">
            Take control{" "}
            <span className="text-meroColor-black-10">
              of your financial journey with
            </span>
          </h1>

          <Image src={mainLogo} width="300" height="300" alt="logoimage_" />
        </div>
        <p className="text-meroColor-dark-gray text-xl max-w-screen-xl">
          Empower your money journey, make informed decisions, and achieve
          lasting financial success. Start budgeting, saving, and learning with
          us today. Let's do this!
        </p>
      </div>
    </>
  );
};

const FormContact = () => {
  return (
    <>
      <div className="py-4 mb-1 bg-meroColor-platinum-10 ">
        <form action="">
          <div className="grid grid-cols-2 gap-10 text-meroColor-light-grey max-w-screen-2xl mx-auto">
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="text-xl font-light text-meroColor-black-10 text-start"
              >
                Name
              </label>
              <input
                className=" border-none p-3 bg-transparent items-center px-4"
                type="text"
                placeholder="Your full name"
              />
              <span className="border border-meroColor-light-grey w-full my-4"></span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-xl font-light text-meroColor-black-10 text-start"
              >
                Mobile (Optional)
              </label>
              <input
                className=" border-none p-3 bg-transparent items-center px-4"
                type="text"
                placeholder="Your mobile number"
              />
              <span className="border border-meroColor-light-grey w-full my-4"></span>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-xl font-light text-meroColor-black-10 text-start"
              >
                Email
              </label>
              <input
                className=" border-none p-3 bg-transparent items-center px-4"
                type="email"
                placeholder="Your email address"
              />
              <span className="border border-meroColor-light-grey w-full my-4"></span>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-xl font-light text-meroColor-black-10 text-start "
              >
                Message (Optional)
              </label>
              <input
                className=" border-none p-3 bg-transparent items-center px-4"
                type="text"
                placeholder="Your message"
              />
              <span className="border border-meroColor-light-grey w-full my-4"></span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
