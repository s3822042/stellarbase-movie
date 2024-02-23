export const SITE_NAME: string = "Stellarbase Movie";

export const DEFAULT_MOVIE_TYPE: string = "popular";

export const SORT_BY_OPTIONS = [
  {
    id: "popular",
    name: "Popular",
  },
  {
    id: "now_playing",
    name: "Now playing",
  },
  {
    id: "upcoming",
    name: "Upcoming",
  },
  {
    id: "top_rated",
    name: "Top Rated",
  },
];

export const API_URL: string = "https://api.themoviedb.org/3";

export const IMAGE_BASE_PATH: string = "https://image.tmdb.org/t/p/w500";

export const APP_NAVIGATION = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Favourite",
    path: "/favourite",
  },
];
