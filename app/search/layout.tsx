import React, { Suspense } from "react";
import SearchHeader from "../components/SearchHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense>
        <header>
          <SearchHeader />
        </header>
      </Suspense>
      {children}
    </div>
  );
};

export default layout;
