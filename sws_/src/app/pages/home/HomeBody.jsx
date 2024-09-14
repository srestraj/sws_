import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    topic: "Discover",
    slug: "Practical guidance about Orthotropics.",
    inn: [
      { id: 1, listsInfo: "What is Orthotropics?" },
      { id: 2, listsInfo: "Orthotropics for dental practitioners" },
      { id: 3, listsInfo: "Orthotropics for parents" },
      { id: 4, listsInfo: "Orthotropics for the public" },
      { id: 5, listsInfo: "Find an Orthotropics expert" },
    ],
    visitLink: "More guidance on Orthotropics",
  },
  {
    id: 2,
    topic: "Education",
    slug: "Educational information about Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Training courses in Orthotropics " },
      { id: 2, listsInfo: "Educational centres for Orthotropics " },
      { id: 3, listsInfo: "History of Orthotropics education" },
      { id: 4, listsInfo: "Books and literature on Orthotropics" },
      { id: 5, listsInfo: "Useful links on orthotropics" },
    ],
    visitLink: "More resources on Orthotropics",
  },
  {
    id: 3,
    topic: "Science",
    slug: "Following the data on Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Orthotropics evidence" },
      { id: 2, listsInfo: "Orthodontic evidence" },
      { id: 3, listsInfo: "Orthotropic vs Orthodontic evidence" },
      { id: 4, listsInfo: "Research projects" },
      { id: 5, listsInfo: "Case studies" },
    ],
    visitLink: "More scince on Orthotropics",
  },
  {
    id: 4,
    topic: "About the IAFGG",
    slug: "Following the data on Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Who we are and what we do" },
      { id: 2, listsInfo: "Members of the IAFGG" },
      { id: 3, listsInfo: "Latest news and blogs" },
      { id: 4, listsInfo: "Contact the IAFGG" },
    ],
    visitLink: "More about the IAFGG",
  },
];
const HomeBody = () => {
  return (
    <div className="grid grid-cols-2 text-light-green30 gap-10 w-ful ">
      {data.map((datass) => (
        <div
          className="relative flex flex-col text-start p-7 rounded-3xl"
          key={datass.id}
        >
          <h1 className="text-4xl font-medium text-light-black30 py-2">
            {datass.topic}
          </h1>
          <span className="text-light-black30 py-1">{datass.slug}</span>

          <div className="py-6 ps-2 leading-10">
            {datass.inn.map((innerData) => (
              <div
                className="flex font-bold leading-10 p-1 "
                key={innerData.id}
              >
                <div className=" bg-light-green30 flex justify-center items-center rounded-full size-8 p-1 text-light-white10">
                  <ArrowRightIcon className=" hover:translate-x-1 text-light-white10 duration-200 transition-transform" />
                </div>
                <li className="list-none mx-2 underline">
                  {innerData.listsInfo}
                </li>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0  ms-2">
            <a href="" className="text-sm underline text-light-black30 flex">
              {datass.visitLink}
              <div className="flex justify-center items-center rounded-full size-6 p-1 ms-1">
                <ArrowRightIcon className="hover:translate-x-1 text-light-black30 duration-200 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBody;
