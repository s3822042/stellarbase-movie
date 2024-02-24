"use client";

import { DefaultLayout } from "@/app/components/layouts/DefaultLayout";
import EmptyPage from "@/app/components/layouts/EmptyPage";
import MovieCard from "@/app/components/modules/movies/MovieCard";
import { IMovieDetail } from "@/app/types/MovieCard";
import { getFavoriteMovies } from "@/app/utils";

export default function FavouritePage() {
  const favMovies = getFavoriteMovies();

  return (
    <DefaultLayout>
      {favMovies.length > 0 ? (
        <div className="mx-auto max-w-7xl pb-10 lg:grid lg:grid-cols-12 lg:gap-x-5 lg:px-8 lg:py-12 mt-8">
          <div className="space-y-6 px-4 sm:px-6 lg:col-span-10 lg:px-0">
            <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
              {favMovies.map((movie: IMovieDetail) => (
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
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-center text-5xl font-bold">
          <EmptyPage message="There is no favourite movies" />
        </div>
      )}
    </DefaultLayout>
  );
}
