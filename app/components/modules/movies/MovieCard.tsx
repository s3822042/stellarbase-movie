import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

import { IMovieDetail } from "@/app/types/MovieCard";
import { buildImagePath, convertDateFormat } from "@/app/utils";

export default function MovieCard(props: IMovieDetail) {
  const { id, title, poster_path, vote_average, release_date } = props;

  const imageUrl = buildImagePath(poster_path);

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg shadow focus-within:ring-4 focus-within:ring-blue-500">
      <Link href={`/movie/${id}`}>
        <div className="relative shrink-0">
          <Image
            loading="lazy"
            className="h-56 w-full object-cover"
            src={imageUrl || "/image-not-found.jpeg"}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute inset-0 mt-20 bg-gradient-to-b from-transparent to-gray-900 group-hover:to-gray-800"></div>
          <div className="absolute inset-x-0 bottom-0 flex-1 px-4 pb-4">
            <p className="text-xl font-semibold text-white">{title}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between bg-gray-900 p-4 group-hover:bg-gray-800">
          <Rating
            initialValue={vote_average}
            iconsCount={10}
            size={20}
            allowFraction={true}
            SVGclassName={`inline-block`}
            readonly
          />
          <div className="mt-2 flex space-x-1 text-sm text-gray-300">
            {convertDateFormat(release_date)}
          </div>
        </div>
      </Link>
    </div>
  );
}
