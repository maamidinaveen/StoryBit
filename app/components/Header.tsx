// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-xl font-semibold">Movies</span>
            </Link>
            <span className="hidden text-sm text-gray-500 sm:inline">
              Starter
            </span>
          </div>

          {/* nav + search */}
          <div className="flex items-center gap-4">
            {/* Search input (non-functional placeholder for now) */}
            <div className="hidden sm:block">
              <input
                aria-label="Search"
                placeholder="Search movies..."
                className="w-64 rounded-md border px-3 py-1 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Desktop links */}
            <nav className="hidden sm:flex items-center gap-4">
              <Link href="#" className="text-sm hover:underline">
                Popular
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Genres
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-900 sm:hidden"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (simple) */}
        {open && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="block px-2 py-2"
              >
                Popular
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="block px-2 py-2"
              >
                Genres
              </Link>
              <input
                aria-label="Search"
                placeholder="Search movies..."
                className="mx-2 mt-2 rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
