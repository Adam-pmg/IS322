"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];

  return (
    <div className="py-5 px-2 sm:px-10 bg-orange-300 flex items-center justify-between client">
      <div>
        <Link href="/">
          <h1 className="text-purple text-orange-700 font-bold text-5xl text-center">
            CookingCache
          </h1>
        </Link>
      </div>
      {pathname && currentArea && (
        <div>
          <Link
            className="bg-orange-500 text-white p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Return
            {/* Back to {recipeID ? `${currentArea} recipes` : "recipe types"} */}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logo;
