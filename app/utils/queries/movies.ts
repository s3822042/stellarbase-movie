import { IMovieDetail, IMovieListResponse } from "@/app/types/Movies";
import { IMovieReviewResponse } from "@/app/types/Reviews";
import { fetchData } from "@/app/utils";
import { API_URL, DEFAULT_MOVIE_TYPE } from "@/app/utils/constants";

export function getMovieList(
  movie_type: string = DEFAULT_MOVIE_TYPE,
  page_number: number = 1,
): Promise<IMovieListResponse> {
  return fetchData(`${API_URL}/movie/${movie_type}?page=${page_number}`, {
    method: "GET",
  });
}

export function getMovieDetail(
  movie_id: string | string[],
): Promise<IMovieDetail> {
  return fetchData(`${API_URL}/movie/${movie_id}`, { method: "GET" });
}

export function getMovieReviews(
  movie_id: string | string[],
): Promise<IMovieReviewResponse> {
  return fetchData(`${API_URL}/movie/${movie_id}/reviews`, { method: "GET" });
}

export function getSimilarMovies(
  movie_id: string | string[],
): Promise<IMovieListResponse> {
  return fetchData(`${API_URL}/movie/${movie_id}/similar`, { method: "GET" });
}
