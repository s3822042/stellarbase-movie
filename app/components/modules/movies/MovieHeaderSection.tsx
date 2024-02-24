import { useEffect, useState } from "react";

import { IconCalendar, IconStar, IconMessage } from "@tabler/icons-react";
import Image from "next/image";

import { IMovieDetail } from "@/app/types/MovieCard";
import {
  addToFavorites,
  buildImagePath,
  convertDateFormat,
  getFavoriteMovies,
  removeFromFavorites,
  showToast,
} from "@/app/utils";

type MovieHeaderSectionProps = {
  movie: IMovieDetail;
};

export default function MovieHeaderSection(props: MovieHeaderSectionProps) {
  const { movie } = props;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favorites = getFavoriteMovies();
    const isMovieInFavorites = favorites.some(
      (favMovie) => favMovie.title === movie.title,
    );
    setIsFavourite(isMovieInFavorites);
  }, [movie.title]);

  const handleClickFavourite = () => {
    if (isFavourite) {
      showToast("error", "Removed from favourites");
      removeFromFavorites(movie);
    } else {
      showToast("success", "Added to favourites");
      addToFavorites(movie);
    }

    setIsFavourite(!isFavourite);
  };

  const imageUrl = buildImagePath(movie.poster_path);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto min-w-0 max-w-7xl flex-1 px-8 pb-8 lg:pb-16">
        <div className="pt-4 lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div className="relative lg:col-span-7">
            <Image
              loading="lazy"
              className="max-h-96 rounded-md shadow-md"
              src={imageUrl || "/image-not-found.jpeg"}
              alt={movie.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="space-y-4 px-0 lg:col-span-5">
            <h2 className="tracking-7 mt-4 text-4xl font-extrabold text-white sm:text-3xl lg:mt-0">
              {movie.title}
            </h2>

            <div className="flex flex-col space-y-2 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 sm:space-y-0">
              <div className="flex items-center text-sm text-gray-500">
                <IconCalendar
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {convertDateFormat(movie.release_date)}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <IconStar
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {Number(movie.vote_average).toFixed(1)} stars
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <IconMessage
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {movie.vote_count} reviews
              </div>
            </div>

            <div>
              <p className="text-white">{movie.overview}</p>
            </div>
            <div
              className={`flex space-x-4 ${isFavourite ? "text-red-600" : "text-green-600"}`}
            >
              <div
                className={`rounded-full ${isFavourite ? "bg-red-600" : "bg-green-600"}`}
                onClick={handleClickFavourite}
                role="button"
              >
                <div className="px-4 py-2 text-sm font-black text-white">
                  {isFavourite ? "Remove from favourite" : "Add to favourite"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
