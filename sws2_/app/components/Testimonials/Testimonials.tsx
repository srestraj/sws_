("use clinet");
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

interface AuthorTestimonial {
  name: string;
  position: string;
}

interface TestimonialData {
  id: number;
  descriptions: string;
  author: AuthorTestimonial;
  display: boolean;
}

const data: TestimonialData[] = [
  {
    id: 1,
    descriptions:
      "PursePulse has been a game-changer for my small business. The seamless integration across platforms saved us time and headaches. Our customers love the convenience, and the secure transactions give them peace of mind.",
    author: {
      name: "Jay Adams Founder of Bridge Cosmetics",
      position: "Founder of Bridge Cosmetics",
    },
    display: true,
  },

  {
    id: 2,
    descriptions:
      "I'm always on the lookout for innovative fintech solutions, and PursePulse Pro exceeded my expectations. The customizable APIs made the integration process a breeze for my app development project.",

    author: {
      name: "Michael Tate Tech Enthusiast",
      position: "Tech Enthusiast",
    },
    display: true,
  },

  {
    id: 3,
    descriptions:
      "As someone who's meticulous about budgeting, PursePulse Pro has been a revelation. The personalized spending insights have helped me stay on track and make smarter financial decisions. It's not just a wallet integration tool; it's my financial partner!",
    author: { name: "Sarah Prichett Homemaker", position: "Homemaker" },
    display: false,
  },
];

const Testimonials:React.FC = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey w-full ">
        <div className="flex items-center flex-col md:flex-row md:justify-center transition-all ease-in-out overflow-hidden max-w-screen mx-auto px-28">
          <div className="flex flex-col justify-center items-center ">
            <div className="md:flex ">
              <div className=" bg-transparent rounded-r-full border-l-0 border-2 border-meroColor-electric-indigo flex justify-center items-center flex-col py-20 my-20 mx-auto">
                {slidingCard}
              </div>
              <div className="flex flex-col py-20  my-20 mx-20 ">
                {rightContent}
              </div>
            </div>

            <div className="  text-center py-1 mt-5">
              <h1 className=" text-2xl text-meroColor-white-10 font-bold py-1">
                Unlock even more with{" "}
                <span className="text-meroColor-electric-indigo">
                  PursePulse Pro
                </span>
              </h1>

              <p className="text-sm">
                Gain access to real professionals ready to answer your questions
                and provide personalized advice, ensuring your financial
                success, only with PursePulse Pro
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

const rightContent = (
  <>
    <h1 className="text-4xl text-meroColor-white-10 font-bold  min-w-96 max-w-screen-2xl">
      Join
      <span className="text-meroColor-electric-indigo"> 5 million+ </span>
      members
    </h1>
    <p className="text-sm text-meroColor-platinum-10 my-6">
      We’ve worked hard for the past 5 years saving our members over $1 billion
      dollars and counting. We’ll do just that for you too.
    </p>
  </>
);

const slidingCard = (
  <>
    {data?.map((slideInformation) => (
      <div
        className={`flex justify-around  items-center ${
          slideInformation.display == true && "hidden"
        }   `}
        key={slideInformation.id}
      >
        <button>
          <ArrowLeftCircleIcon className="text-meroColor-white-10 size-10" />
        </button>
        <div className="w-1/2  flex flex-col justify-center text-meroColor-white-10">
          <h3 className="text-8xl leading-3">"</h3>
          <h4 className="text-sm ">{slideInformation.descriptions}</h4>
          <div className="text-sm my-4 text-meroColor-electric-indigo">
            <h1>{slideInformation.author.name}</h1>
            <h4>{slideInformation.author.position}</h4>
          </div>
        </div>
        <button>
          <ArrowRightCircleIcon className="text-meroColor-platinum-10 size-10" />
        </button>
      </div>
    ))}
  </>
);
