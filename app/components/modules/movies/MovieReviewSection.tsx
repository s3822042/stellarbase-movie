import { Alert } from "@/app/components/elements/Alert";
import MovieReviewCard from "@/app/components/modules/movies/MovieReviewCard";
import { IMovieReview } from "@/app/types/Reviews";

type MovieReviewSectionProps = {
  reviews: IMovieReview[];
};

export default function MovieReviewSection({
  reviews,
}: MovieReviewSectionProps) {
  return (
    <div className="space-y-6 pt-4 lg:col-span-9 lg:pt-0">
      <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Reviews
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:px-6">
            {reviews && reviews.length > 0 ? (
              <ul className="space-y-8">
                {reviews.map((review) => (
                  <MovieReviewCard key={review.id} review={review} />
                ))}
              </ul>
            ) : (
              <Alert message="No review found." />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
