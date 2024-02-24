import { useContext } from "react";

import { MovieDetailSectionContext } from "@/app/contexts/MovieDetailSectionContext";
import { classNames } from "@/app/utils";

export default function MovieSidebar() {
  const { currentSection, setCurrentSection } = useContext(
    MovieDetailSectionContext,
  );

  return (
    <aside className="order-first lg:order-last lg:col-span-3 lg:p-0">
      <nav
        className="space-y-2 rounded-md bg-gray-50 p-4 shadow"
        aria-label="Sidebar"
      >
        <button
          onClick={() => {
            setCurrentSection("details");
          }}
          className={classNames(
            currentSection == "details"
              ? "bg-indigo-400 text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
            "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md",
          )}
          aria-current="page"
        >
          <span className="truncate">Movie details</span>
        </button>
        <button
          onClick={() => {
            setCurrentSection("reviews");
          }}
          className={classNames(
            currentSection == "reviews"
              ? "bg-indigo-400 text-white"
              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
            "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md",
          )}
        >
          <span className="truncate">Reviews</span>
        </button>
      </nav>
    </aside>
  );
}
