"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";


interface ListingClientProps {
  listing: any;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex gap-2 flex-col md:flex-row md:gap-16">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            id={listing.id}
            currentUser={currentUser}
          />
          <div
            className="
              mt-8
            "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              price={listing.price}
              pageCount={listing.pageCount}
              rating={listing.rating}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;