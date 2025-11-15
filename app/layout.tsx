// app/layout.tsx
import "./globals.css";

import Header from "./components/Header";

export const metadata = {
  title: "My Movies App",
  description: "Starter Next.js + Tailwind project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background[color:var(--background)] text-foreground[color:var(--foreground)]">
        {/* Fixed header */}
        <Header />

        {/* main has top padding equal to header height */}
        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
