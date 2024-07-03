import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";
type Results = {
  results: {
    items: {
      link: string;
      displayLink: string;
      title: string;
      image: { contextLink: string };
    }[];
  };
};
const ImageSearch = ({ results }: Results) => {
  return (
    <div className="pb-24 mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {results.items.map((result) => (
          <div key={result.link} className="w-full h-auto">
            <div className="group mb-8" >
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="!w-full object-contain !h-60 group-hover:shadow-xl transition-shadow"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h1 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h1>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="text-gray-600 group-hover:underline truncate">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default ImageSearch;
