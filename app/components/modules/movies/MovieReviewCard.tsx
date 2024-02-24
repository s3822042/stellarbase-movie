import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import { IMovieReview } from "@/app/types/Reviews";
import { buildImagePath, convertDateFormat } from "@/app/utils";

type MovieReviewCardProps = {
  review: IMovieReview;
};

export default function MovieReviewCard({ review }: MovieReviewCardProps) {
  const imageUrl = buildImagePath(review.author_details.avatar_path);

  return (
    <li>
      <div className="flex space-x-3">
        <div className="shrink-0">
          <div className="size-10">
            <Image
              className="rounded"
              loading="lazy"
              src={imageUrl || "/default-avatar.jpeg"}
              alt={review.author_details.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-700">
            <h2 className="font-bold">
              {review.author_details.name || "Anonymous user"}
            </h2>
            <p>{review.content}</p>
          </div>
          <div className="mt-2 flex space-x-2 text-sm">
            <span className="flex shrink-0 space-x-0 text-gray-500">
              <Rating
                initialValue={review.author_details.rating}
                iconsCount={10}
                size={20}
                allowFraction={true}
                SVGclassName={`inline-block`}
                readonly
              />
            </span>
            <span className="font-medium text-gray-500">&middot;</span>
            <span className="font-medium text-gray-500">
              {review.updated_at ? convertDateFormat(review.updated_at) : null}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
