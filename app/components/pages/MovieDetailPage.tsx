"use client";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

import { DefaultLayout } from "@/app/components/layouts/DefaultLayout";
import MovieDetailSection from "@/app/components/modules/movies/MovieDetailSection";
import MovieHeaderSection from "@/app/components/modules/movies/MovieHeaderSection";
import MovieReviewSection from "@/app/components/modules/movies/MovieReviewSection";
import MovieSidebar from "@/app/components/modules/movies/MovieSidebar";
import MovieSimilarSection from "@/app/components/modules/movies/MovieSimilarSection";
import { MovieDetailSectionContext } from "@/app/contexts/MovieDetailSectionContext";
import { getMovieDetail, getMovieReviews } from "@/app/utils/queries/movies";

export default function MovieDetailPage() {
  const movie_id = useParams().id;
  const [currentSection, setCurrentSection] = useState("details");

  const { data: movieDetailData, isLoading } = useQuery({
    queryKey: ["get-movie-detail", movie_id],
    queryFn: () => getMovieDetail(movie_id),
    enabled: Boolean(movie_id),
  });

  const { data: movieReviewsData } = useQuery({
    queryKey: ["get-movie-reviews", movie_id],
    queryFn: () => getMovieReviews(movie_id),
    enabled: Boolean(movie_id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <DefaultLayout>
      {movieDetailData ? (
        <>
          <MovieHeaderSection movie={movieDetailData} />

          <MovieDetailSectionContext.Provider
            value={{ currentSection, setCurrentSection }}
          >
            <>
              <div className="mx-auto grid max-w-7xl p-8 lg:grid-cols-12 lg:gap-x-5">
                {currentSection == "details" && (
                  <MovieDetailSection movie={movieDetailData} />
                )}
                {currentSection == "reviews" && (
                  <MovieReviewSection
                    reviews={movieReviewsData?.results || []}
                  />
                )}
                <MovieSidebar />
              </div>
              <MovieSimilarSection movie_id={movie_id} />
            </>
          </MovieDetailSectionContext.Provider>
        </>
      ) : (
        <div className="mx-auto max-w-max py-56">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Movie not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      )}
    </DefaultLayout>
  );
}
