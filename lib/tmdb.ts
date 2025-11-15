import { MovieListResponse, Movie } from "@/types/movie";

const BASE = "https://api.themoviedb.org/3";
const KEY = process.env.TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${KEY}`,
  },
};

if (!KEY) {
  // fail fast on server when missing key
  throw new Error("TMDB_API_KEY missing in .env.local");
}

// Fetch popular movies (server-side)

export async function getMoviesByCategory(
  page: number,
  category: string
): Promise<MovieListResponse> {
  const res = await fetch(`${BASE}/movie/${category}`, options);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function fetchMovieById(id: number): Promise<Movie> {
  const res = await fetch(`${BASE}/movie/${id}`, options);
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}
