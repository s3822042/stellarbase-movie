import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { useQuery } from "@tanstack/react-query";

import MovieCard from "@/app/components/modules/movies/MovieCard";
import Pagination from "@/app/components/modules/search/Pagination";
import { SearchSectionContext } from "@/app/contexts/SearchContext";
import { IMovieDetail } from "@/app/types/Movies";
import { SORT_BY_OPTIONS } from "@/app/utils/constants";
import { getMovieList } from "@/app/utils/queries/movies";

type SearchResultsSectionProps = {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setOrderBy: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  triggerSearch: any;
};

export default function SearchResultsSection({
  setIsSearching,
  setOrderBy,
  setPageNumber,
  triggerSearch,
}: SearchResultsSectionProps) {
  const searchContext = useContext(SearchSectionContext);
  const [moviesCount, setMoviesCount] = useState(0);

  const [movies, setMovies] = useState(Array());

  const { data, isLoading } = useQuery({
    queryKey: [
      "get-movie-list",
      searchContext.orderBy,
      searchContext.pageNumber,
    ],
    queryFn: () =>
      getMovieList(searchContext.orderBy, searchContext.pageNumber),
  });

  useEffect(() => {
    if (data) {
      setMovies(data.results);
      setMoviesCount(data.results.length);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:col-span-10 lg:px-0">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="flex-1"></div>
        <div className="flex items-center pt-6 text-sm text-gray-500">
          <label
            htmlFor="sort"
            className="inline-block w-auto pr-2 text-base font-medium text-gray-400"
          >
            Sort by:
          </label>
          <select
            id="sort"
            name="sort"
            onChange={(e) => {
              setOrderBy(e.target.value);
              triggerSearch();
            }}
            value={searchContext.orderBy}
            className="block w-auto rounded-md border-gray-300 py-2 pl-3 pr-10 text-base font-bold text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {SORT_BY_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
        {movies.map((movie: IMovieDetail) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
      <Pagination
        setPageNumber={setPageNumber}
        triggerSearch={triggerSearch}
        pageMaxValue={moviesCount}
      />
    </div>
  );
}
