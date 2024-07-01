
import Link from "next/link";
import React from "react";
import parse from 'html-react-parser';
type Results = {
  results: {
    searchInformation: {
      searchTime: number;
      formattedTotalResults: string;
    };
    items: {
        link:string,
        title:string,
        htmlSnippet:string,
        formattedUrl:string
    }[];
  };
};
const WebSearch = ({ results }: Results) => {
  return (
    <div className="w-full px-3 pb-30 md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results ({" "}
        {results.searchInformation.searchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div className="mb-5 max-w-xl" key={result.link}>
          <div className="group flex flex-col items-start sm:m-0 ">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              className="truncate text-blue-800 group-hover:underline decoration-blue-800 text-xl font-medium"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{parse(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default WebSearch;
