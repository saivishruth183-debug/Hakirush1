// app/clients/[id]/page.tsx
import ClientPage from "../[id]/ClientPage";
import { clients } from "../data/clients";

export async function generateStaticParams() {
  return clients.map((client) => ({ id: client.id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ClientPage params={params} />;
}
