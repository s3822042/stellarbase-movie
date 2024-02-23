"use client";

import { useState } from "react";

import { DefaultLayout } from "@/app/components/layouts/DefaultLayout";
import SearchResultsSection from "@/app/components/modules/search/SearchResultsSection";
import { SearchSectionContext } from "@/app/contexts/SearchContext";
import { ISearchOptions } from "@/app/types/SearchOptions";
import { SORT_BY_OPTIONS } from "@/app/utils/constants";

export default function HomePage(props: ISearchOptions) {
  const { requestPageNumber = 1, requestPageLimit = 6 } = props;
  const [orderBy, setOrderBy] = useState(SORT_BY_OPTIONS[0].id);
  const [isSearching, setIsSearching] = useState(true);
  const [pageNumber, setPageNumber] = useState(requestPageNumber);
  const [pageLimit, setPageLimit] = useState(requestPageLimit);

  const contextValues = {
    orderBy,
    isSearching,
    pageNumber,
    pageLimit,
  };

  const triggerSearch = () => {
    setIsSearching(true);
  };

  return (
    <DefaultLayout>
      <SearchSectionContext.Provider value={contextValues}>
        <div className="mx-auto max-w-7xl pb-10 lg:grid lg:grid-cols-12 lg:gap-x-5 lg:px-8 lg:py-12">
          <SearchResultsSection
            triggerSearch={triggerSearch}
            setIsSearching={setIsSearching}
            setOrderBy={setOrderBy}
            setPageNumber={setPageNumber}
          />
        </div>
      </SearchSectionContext.Provider>
    </DefaultLayout>
  );
}
