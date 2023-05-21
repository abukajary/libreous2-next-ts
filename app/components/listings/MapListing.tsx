'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "../EmptyState";

const MapListing = (props: any) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const [isEmptyState, setEmptyState] = useState(true);

  useEffect(() => {
    if (props.listings.length === 0) {
      setEmptyState(true);
    } else {
      const hasMatchingListings = props.listings.some(
        (listing: any) => listing.category === category || !category
      );
      setEmptyState(!hasMatchingListings);
    }
  }, [props.listings, category]);

  return (
    <>
      <div
        className="
        pt-24
        grid 
        grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {props.listings.map((listing: any) => {
          if (listing.category === category || !category) {
            return (
              <ListingCard
                currentUser={props.currUser}
                key={listing.id}
                data={listing}
              />
            );
          }
          return null;
        })}
      </div>
      {isEmptyState && <EmptyState showReset />}
    </>
  );
};

export default MapListing;
