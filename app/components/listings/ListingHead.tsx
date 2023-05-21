"use client";

import { SafeUser } from "@/app/types";

import Heading from "@/app/ui/Heading";
import HeartButton from "@/app/ui/HeartButton";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  id,
  currentUser,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <Heading title={title} />
      <div
        className="
          w-[20vh]
          md:w-[40vh]
          h-full
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <img src={imageSrc} className="object-cover w-full" alt="Image" />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingHead;
