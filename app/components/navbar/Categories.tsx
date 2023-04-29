"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  GiCrimeSceneTape,
  GiHalfHeart,
  GiWesternHat,
  GiOrbit,
} from "react-icons/gi";

import { FaGlobeAsia } from "react-icons/fa";
// import { WiAlien } from "react-icons/Wi";

import CategoryBox from "@/app/ui/CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Fantasy",
    icon: GiOrbit,
    description:
      "imaginative fiction dependent for effect on strangeness of setting (such as other worlds or times) and of characters (such as supernatural or unnatural beings)",
  },
  {
    label: "Mystery",
    icon: GiOrbit,
    description:
      "Fiction that follows a crime (like a murder or a disappearance) from the moment it is committed to the moment it is solved",
  },
  {
    label: "Thriller",
    icon: GiCrimeSceneTape,
    description:
      "Stories are intended to arouse feelings of excitement or suspense, and sometimes fear",
  },
  {
    label: "Romance",
    icon: GiHalfHeart,
    description:
      "Novels of a certain length, released under a common imprint at regular intervals",
  },
  {
    label: "Westerns",
    icon: GiWesternHat,
    description: "Stories that take place in the American Old West",
  },
  {
    label: "Contemporary",
    icon: FaGlobeAsia,
    description:
      "Realistic fiction creates imaginary characters and situations that depict our world and society",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
