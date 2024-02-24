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

interface GenreColorMap {
  [key: string]: string;
}

export const GENRE_COLOR_MAP: GenreColorMap = {
  Action: "#FF4500", // Red-Orange
  Adventure: "#32CD32", // Lime Green
  Animation: "#00BFFF", // Deep Sky Blue
  Comedy: "#FFD700", // Gold
  Crime: "#8B008B", // Dark Magenta
  Documentary: "#808080", // Gray
  Drama: "#008080", // Teal
  Family: "#FF6347", // Tomato
  Fantasy: "#800080", // Purple
  History: "#D2B48C", // Tan
  Horror: "#FF0000", // Red
  Music: "#FF69B4", // Hot Pink
  Mystery: "#4B0082", // Indigo
  Romance: "#FF1493", // Deep Pink
  "Science Fiction": "#20B2AA", // Light Sea Green
  "TV Movie": "#A52A2A", // Brown
  Thriller: "#2F4F4F", // Dark Slate Gray
  War: "#B0C4DE", // Light Steel Blue
  Western: "#DEB887", // Burlywood
};
