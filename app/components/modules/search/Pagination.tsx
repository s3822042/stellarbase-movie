import { useContext } from "react";

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

import { SearchSectionContext } from "@/app/contexts/SearchContext";
interface PaginationProps {
  triggerSearch: any;
  setPageNumber: any;
  pageMaxValue: number;
}

export default function Pagination(props: PaginationProps) {
  const { triggerSearch, setPageNumber, pageMaxValue } = props;

  const searchContext = useContext(SearchSectionContext);
  const pageOffset = 2;
  const goToPage = (page: number) => {
    setPageNumber(page);
    triggerSearch();
  };
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        {searchContext.pageNumber > 1 ? (
          <button
            onClick={() => {
              setPageNumber(searchContext.pageNumber - 1);
              triggerSearch();
            }}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <IconArrowNarrowLeft
              className="mr-3 size-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        ) : null}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {searchContext.pageNumber > pageOffset + 1 ? (
          <>
            <button
              onClick={() => goToPage(1)}
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              1
            </button>
            {searchContext.pageNumber > pageOffset + 2 && (
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
            )}
          </>
        ) : null}
        {[...Array(2 * pageOffset + 1)].map((x, i) =>
          searchContext.pageNumber + (i - pageOffset) > 0 &&
          searchContext.pageNumber + (i - pageOffset) <= pageMaxValue ? (
            <button
              key={i}
              onClick={() => {
                goToPage(searchContext.pageNumber + (i - pageOffset));
              }}
              disabled={i == pageOffset}
              className={`${i == pageOffset ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "} 
                            inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium`}
            >
              {searchContext.pageNumber + (i - pageOffset)}
            </button>
          ) : null,
        )}
        {searchContext.pageNumber < pageMaxValue - 2 ? (
          <>
            {searchContext.pageNumber < pageMaxValue - 3 && (
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
            )}
            <button
              onClick={() => goToPage(pageMaxValue)}
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              {pageMaxValue}
            </button>
          </>
        ) : null}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {searchContext.pageNumber < pageMaxValue ? (
          <button
            onClick={() => {
              setPageNumber(searchContext.pageNumber + 1);
              triggerSearch();
            }}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <IconArrowNarrowRight
              className="ml-3 size-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        ) : null}
      </div>
    </nav>
  );
}
