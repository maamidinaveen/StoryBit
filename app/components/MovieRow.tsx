"use client";

import Link from "next/link";
import Image from "next/image";
import type { Movie } from "@/types/movie";

interface MovieRowProps {
  movies: Movie[];
  categoryTitle?: string;
}

function formatTitle(title?: string) {
  if (!title) return "";
  return title
    .replace(/_/g, " ") // change underscores to spaces
    .replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1)); // capitalize each word
}

// Function to create a safe unique ID
function makeId(title?: string) {
  if (!title) return "movie-row";
  return "movie-row-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  if (!movies || movies.length === 0) return null;

  const id = makeId(categoryTitle);
  const SCROLL = 300;

  function scrollLeft() {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: -SCROLL, behavior: "smooth" });
  }

  function scrollRight() {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: SCROLL, behavior: "smooth" });
  }

  return (
    <section className="relative">
      <h2 className="text-xl font-semibold mb-4">
        {formatTitle(categoryTitle)}
      </h2>

      {/* Left Arrow */}
      <button
        type="button"
        onClick={scrollLeft}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black"
        aria-label="Scroll left"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={scrollRight}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black"
        aria-label="Scroll right"
      >
        ▶
      </button>

      {/* Movie Row (scrollable but scrollbar hidden) */}
      <div
        id={id}
        className="flex gap-3 overflow-x-auto scrollbar-hide py-4 px-2"
      >
        {movies.map((m) => {
          const poster = m.poster_path
            ? `https://image.tmdb.org/t/p/w342${m.poster_path}`
            : "/no-poster.png";

          return (
            <Link
              key={m.id}
              href={`/movie/${m.id}`}
              aria-label={`Open details for ${m.title}`}
              className="min-w-[150px] w-[150px] shrink-0"
            >
              <div className="relative w-full h-[225px] rounded overflow-hidden bg-gray-200">
                <Image
                  src={poster}
                  alt={m.title}
                  width={200}
                  height={300}
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="mt-2 text-sm">
                <p className="font-medium line-clamp-2">{m.title}</p>
                <p className="text-xs text-gray-500">{m.release_date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
