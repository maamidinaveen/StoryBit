// app/movie/[id]/page.tsx

type MoviePageProps = {
  params: {
    id: string;
  };
};

export default function MoviePage({ params }: MoviePageProps) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">Movie details page</h1>
    </main>
  );
}
