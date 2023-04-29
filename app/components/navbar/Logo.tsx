"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h1
      className="hidden md:block cursor-pointer text-lg italic line-clamp-1"
      onClick={() => {
        router.push("/");
      }}
    >
      Libreous
    </h1>
  );
};

export default Logo;
