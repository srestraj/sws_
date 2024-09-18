("use clinet");

import { CheckIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
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

const Pricing = () => {
  return (
    <>
      <div className=" bg-meroColor-jet-black text-meroColor-platinum-10 flex flex-col items-center justify-center text-center py-1 transition-all ease-in-out  ">
        <PricingTopElement />
        <div className="bg-meroColor-electric-indigo rounded-t-full flex flex-col justify-items-center ">
          <ToggleButton />
          <CardsElements />
        </div>
      </div>
    </>
  );
};

export default Pricing;

const PricingTopElement = () => {
  return (
    <>
      <h1 className="text-6xl font-bold px-40 py-4">
        Unlock even more with
        <span className="text-meroColor-electric-indigo">
          {" PursePulse Pro"}
        </span>
      </h1>
      <p className="py-1">
        Gain access to real professionals ready to answer your questions and
        provide personalized advice, ensuring your financial success, only with
        PursePulse Pro
      </p>
    </>
  );
};

const ToggleButton = () => {
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

const CardsElements = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 p-28 ">
        {pricingData.map((datas) => (
          <div className="flex text-start p-4 text-xl w-4/5" key={datas.id}>
            <CheckCircleIcon className="size-12" />
            <div className="flex flex-col items-start px-2">
              <h1 className="text-3xl ">{datas.heading}</h1>
              <p className="py-3 font-medium">{datas.discriptions}</p>
              <div className="border-b-2 border-meroColor-platinum-10 w-full my-8"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
