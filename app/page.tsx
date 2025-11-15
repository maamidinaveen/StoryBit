import React from "react";

import { getMoviesByCategory } from "@/lib/tmdb";

import type { Movie } from "@/types/movie";

import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

export default async function page() {
  try {
    //server side fetch
    const [popularData, topRatedData, nowPlayingData] = await Promise.all([
      getMoviesByCategory(1, "popular"),
      getMoviesByCategory(1, "top_rated"),
      getMoviesByCategory(1, "now_playing"),
    ]);

    const popular: Movie[] = popularData.results || [];
    const topRated: Movie[] = topRatedData.results || [];
    const nowPlaying: Movie[] = nowPlayingData.results || [];

    // first movie for hero

    const heroMovie: Movie | undefined = popular[0];

    return (
      <div className="max-w-6xl mx-auto p-6">
        <HeroBanner movie={heroMovie} />
        <MovieRow movies={popular} categoryTitle="popular" />
        <MovieRow movies={topRated} categoryTitle="top_rated" />
        <MovieRow movies={nowPlaying} categoryTitle="now_playing" />
      </div>
    );
  } catch (error) {
    console.log("Failed to fetch popular movies:", error);
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <div className="text-red-500">
          Failed to load movies. Please check your TMDB_API_KEY and try again.
        </div>
      </div>
    );
  }
}
