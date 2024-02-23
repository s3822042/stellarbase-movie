import { createContext } from "react";

export const SearchSectionContext = createContext({
  orderBy: "popular",
  pageNumber: 1,
  pageLimit: 6,
  isSearching: false,
});
