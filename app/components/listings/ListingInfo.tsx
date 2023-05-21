"use client";

import { IconType } from "react-icons";

import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  user: SafeUser;
  price: string;
  rating: string;
  description: string;
  pageCount: string;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  category,
  price,
  pageCount,
  rating,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>
            Price: <span className="text-red-600 text-3xl">{price} ₸</span>
          </div>
        </div>
        <div
          className="
            flex 
            md:flex-row 
            flex-col
            md:items-center 
            gap-4 
            font-light
            text-neutral-500 whitespace-nowrap
          "
        >
          <div>Pages: {pageCount}</div>
          <div className="flex">Rating: {rating} / 10</div>
          <div>
            <button className="px-16 py-4 rounded-xl hover:bg-red-500 bg-red-600 text-white">Buy</button>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="text-red-600 text-3xl">Description</div>
        <div
          className="
      text-lg font-light text-neutral-500"
        >
          {description}
        </div>
      </div>
      <hr />
      <p className="text-red-600 text-3xl">Category:</p>
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
    </div>
  );
};

export default ListingInfo;
