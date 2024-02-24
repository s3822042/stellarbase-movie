import { IMovieDetail } from "@/app/types/MovieCard";
import { GENRE_COLOR_MAP } from "@/app/utils/constants";

type MovieDetailSectionProps = {
  movie: IMovieDetail;
};

export default function MovieDetailSection(props: MovieDetailSectionProps) {
  const { movie } = props;

  return (
    <div className="space-y-6 pt-4 lg:col-span-9 lg:pt-0">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h2
              id="applicant-information-title"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Movie Details
            </h2>
          </div>
          <article className="p-4 text-base text-gray-800">
            <div className="mb-4">
              <strong className="text-gray-700">Tagline:</strong>{" "}
              {movie.tagline || "N/A"}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Original Language:</strong>{" "}
              {movie.original_language}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Popularity:</strong>{" "}
              {movie.popularity}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Revenue:</strong> $
              {movie.revenue}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Runtime:</strong>{" "}
              {movie.runtime} minutes
            </div>
            <div className="flex space-x-2">
              {movie.genres!.map((genre) => (
                <div
                  key={genre.name}
                  className="rounded-full"
                  style={{
                    backgroundColor: GENRE_COLOR_MAP[genre.name] || "#cccccc",
                  }}
                >
                  <div className="px-4 py-2 text-sm font-black text-white">
                    {genre.name}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
