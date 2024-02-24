export interface IMovieReviewResponse {
  id: number;
  page: number;
  results: IMovieReview[];
  total_pages: number;
  total_results: number;
}

export interface IMovieReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
