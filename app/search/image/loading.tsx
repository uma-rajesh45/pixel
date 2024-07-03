import Link from "next/link";
import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ImageSearch = () => {
  const results = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="pb-24 sm:pb-40 mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {results.map((result) => (
          <div key={result} className="w-full h-auto">
            <div className="group mb-8" >
              <Skeleton
                  className="!w-full object-contain !h-60 group-hover:shadow-xl transition-shadow"
              
              />
                <h1 className="group-hover:underline truncate text-xl">
                  <Skeleton/>
                </h1>
                <p className="text-gray-600 group-hover:underline truncate">
                  <Skeleton/>
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
