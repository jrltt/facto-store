import { getParts } from "@/lib/services/part.service";

export default async function Home() {
  const parts = await getParts();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1>Hola 👋</h1>
      {parts.map((part) => (
        <div key={part.id}>{part.name}</div>
      ))}
    </main>
  );
}
