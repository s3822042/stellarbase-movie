import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/elements/Carousel";
import MovieCard from "@/app/components/modules/movies/MovieCard";
import { IMovieDetail } from "@/app/types/Movies";
import { getSimilarMovies } from "@/app/utils/queries/movies";

type MovieSimilarSectionProps = {
  movie_id: string | string[];
};

export default function MovieSimilarSection({
  movie_id,
}: MovieSimilarSectionProps) {
  const { data: movies } = useQuery({
    queryKey: ["get-similar-movies", movie_id],
    queryFn: () => getSimilarMovies(movie_id),
    enabled: Boolean(movie_id),
  });

  return (
    <div className="mx-auto max-w-7xl p-8 lg:gap-x-5">
      <h1 className="text-xl font-bold tracking-tight text-gray-600 sm:text-5xl">
        You may want to watch
      </h1>
      <div className="mt-8">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {movies?.results.map((movie: IMovieDetail, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <div className="p-1">
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
