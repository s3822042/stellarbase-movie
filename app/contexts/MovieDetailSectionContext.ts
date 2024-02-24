import { createContext } from "react";

export const MovieDetailSectionContext = createContext({
  currentSection: "details",
  setCurrentSection: (section: string) => {},
});
