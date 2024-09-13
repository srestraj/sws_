import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

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
  },
  {
    id: 2,
    topic: "Education",
    slug: "Educational information about Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Educational centres for Orthotropics " },
      { id: 2, listsInfo: "History of Orthotropics education" },
      { id: 3, listsInfo: "Books and literature on Orthotropics" },
      { id: 4, listsInfo: "Useful links on orthotropics" },
    ],
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
  },
];

const discovery = () => {
  // console.log(data)

  return (
    /* flex justify-center items-start w-[1440px] */
    <div className="ms-10 me-0  p-10">
      <div className="grid grid-cols-2 text-[#237688]">
        {data.map((datass) => (
          <div
            className="relative flex flex-col text-start p-8 rounded-3xl"
            key={datass.id}
          >
            <div className="p-2">
              <h1 className="text-4xl font-medium text-black">
                {datass.topic}
              </h1>
              <span className="text-black">{datass.slug}</span>
            </div>
            {datass.inn.map((innerData) => (
              <div className="flex font-bold leading-10" key={innerData.id}>
                <div className="p-1">
                  <ArrowRightCircleIcon className="size-8" />
                </div>
                <li className="list-none mx-2 underline">{innerData.listsInfo}</li>
              </div>
            ))}
            <div className="absolute bottom-0 my-2 ms-2">
              <a href="" className="text-sm underline text-[#000] ">
                More scince on Orthotropics
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default discovery;
