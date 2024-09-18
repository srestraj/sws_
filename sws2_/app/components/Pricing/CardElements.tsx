"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Key } from "react";

interface PriceItem {
  id: Key | null | undefined;
  heading: string;
  descriptions: string;
}

interface CardsElementsProps {
  pricingData: PriceItem[];
}

export const CardsElements = ({ pricingData }: CardsElementsProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 p-28">
      {pricingData.map((priceItem) => (
        <div className="flex text-start p-4 text-xl w-4/5" key={priceItem.id}>
          <CheckCircleIcon className="size-12" />
          <div className="flex flex-col items-start px-2">
            <h1 className="text-3xl">{priceItem.heading}</h1>
            <p className="py-3 font-medium">{priceItem.descriptions}</p>
            <div className="border-b-2 border-meroColor-platinum-10 w-full my-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
