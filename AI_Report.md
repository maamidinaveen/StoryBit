🧠 AI Report
a) AI Tools Used
Tool Name Purpose / Usage Context Version or Platform
ChatGPT (GPT-5) Used extensively for debugging configuration issues, generating React and Next.js components, and writing Tailwind CSS utility classes. ChatGPT (OpenAI, 2025)
GitHub Copilot (optional if used) Used for inline code suggestions, boilerplate generation, and minor JSX completion within VS Code. GitHub Copilot (VS Code Extension)
VS Code IntelliSense Assisted in autocompletion and quick syntax checks. Built-in
b) AI-Assisted Parts of the Project

Below are the specific parts of the project that were heavily influenced or generated through AI-assisted prompts:

1. Project Configuration

Next.js Setup: Helped configure the next.config.mjs and tsconfig.json files for TypeScript and App Router support.

Tailwind CSS Integration: AI guided the creation of:

tailwind.config.cjs

postcss.config.mjs

Resolved errors such as “Unknown at rule @tailwind” and PostCSS plugin configuration issues.

2. UI Development (Tailwind Styling)

Component Styling: Most component styles (e.g., header layout, responsive movie cards, background gradients, hover states) were generated through AI prompts.

Theme Adjustments: AI suggested usage of utility classes for dark mode support (dark:bg-black, bg-gradient-to-b from-black/80 to-transparent etc.).

Typography & Layout: Tailwind class combinations for text sizing, alignment, and spacing were AI-assisted.

3. Utility Functions & API Integration

TMDB API Utilities: Functions such as fetchMovieById() and fetchMoviesList() were structured using AI guidance.

Error Handling: AI suggested try/catch wrappers and conditional rendering logic.

TypeScript Interfaces: AI generated reusable Movie and Genre types.

4. Complex Features

Dynamic Routing (app/movie/[id]/page.tsx):
AI helped structure dynamic route handling, including parameter parsing and server-side fetching logic.

State Management:
Implemented scroll effects (useEffect for header shadow) and condition-based rendering using AI-guided React patterns.

5. Debugging & Optimization

AI was instrumental in resolving:

sourceMapURL could not be parsed errors

Invalid Tailwind or PostCSS syntax issues

Module import path corrections in Next.js App Router

Linting and build optimization issues

c) Reflection

AI assistance significantly accelerated development by:

Providing instant troubleshooting for configuration-level errors.

Suggesting production-ready Tailwind patterns.

Reducing the time needed to debug complex React/Next.js behaviors.

However, manual review and testing were performed after every major change to ensure correctness and code understanding.
