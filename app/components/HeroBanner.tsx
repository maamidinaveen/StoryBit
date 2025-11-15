// components/HeroBanner.tsx
import Image from "next/image";
import type { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie?: Movie }) {
  if (!movie) return null;

  const bannerUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/no-banner.jpg"; // fallback banner

  return (
    <section className="relative w-full h-72 md:h-96 lg:h-112 rounded-xl overflow-hidden mb-10">
      {/* Background Image */}
      <Image
        src={bannerUrl}
        alt={movie.title}
        fill
        priority
        unoptimized
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-6 left-6 text-white max-w-xl">
        <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
          {movie.title}
        </h1>

        <p className="mt-2 text-sm md:text-base opacity-90 line-clamp-3">
          {movie.overview}
        </p>

        <p className="mt-2 text-xs opacity-80">
          ⭐ {movie.vote_average} • {movie.release_date}
        </p>
      </div>
    </section>
  );
}
