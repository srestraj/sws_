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
    <div className="mx-auto container">
      <div className="grid grid-cols-2 text-[#237688] my-3">
        {data.map((datass) => (
          <div className="text-start" key={datass.id}>
            <h1 className="text-4xl font-medium text-[#000]">{datass.topic}</h1>
            <span className="text-[#000]">{datass.slug}</span>
            {datass.inn.map((innerData) => (
              <div className="flex m-2 font-bold" key={innerData.id}>
                <div className="">
                  <ArrowRightCircleIcon className="size-7" />
                </div>
                <li className="list-none">{innerData.listsInfo}</li>
              </div>
            ))}
            <a href="" className="text-sm underline text-[#000] my-3">
              More scince on Orthotropics
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default discovery;
