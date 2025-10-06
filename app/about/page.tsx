export async function generateStaticParams() {
  const res = await fetch('https://api.example.com/points');
  const points = await res.json();

  return points.map((point: { id: string }) => ({
    id: point.id,
  }));
}
