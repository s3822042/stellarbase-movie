import { IMovieDetail } from "@/app/types/MovieCard";
import { fetchData } from "@/app/utils";
import { API_URL, DEFAULT_MOVIE_TYPE } from "@/app/utils/constants";

export function getMovieList(
  movie_type: string = DEFAULT_MOVIE_TYPE,
  page_number: number = 1,
): Promise<any> {
  return fetchData(`${API_URL}/movie/${movie_type}?page=${page_number}`, {
    method: "GET",
  });
}

export function getMovieDetail(
  movie_id: string | string[],
): Promise<IMovieDetail> {
  return fetchData(`${API_URL}/movie/${movie_id}`, { method: "GET" });
}
