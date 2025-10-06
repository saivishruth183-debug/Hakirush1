import Image from "next/image";
import { clients } from "../data/clients";
import { CheckCircle2 } from "lucide-react";

interface ClientPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return clients.map((client) => ({ id: client.id }));
}

const ClientPage = ({ params }: ClientPageProps) => {
  const client = clients.find((c) => c.id === params.id);

  if (!client) {
    return <p className="text-center mt-20 text-gray-600">Client not found.</p>;
  }

  return (
    <div className="mt-24 md:mt-36 mx-4 sm:mx-10 md:mx-20 lg:mx-40 bg-gray-50 rounded-xl shadow-sm">
      {/* Header section */}
      <div className="flex flex-col items-center justify-center gap-6 py-10 px-4 sm:px-8">
        <div className="w-24 h-24 relative">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-red-600 text-center md:text-left">
          {client.name}
        </h1>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 px-4 sm:px-10 md:px-20 lg:px-32 text-center md:text-left leading-relaxed pb-6">
        {client.description}
      </p>

      {/* Partnership Section */}
      <div className="bg-white rounded-t-3xl md:rounded-3xl px-6 sm:px-10 md:px-20 lg:px-32 py-10 shadow-inner">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3 text-center md:text-left">
          {client.partnership.title}
        </h2>
        <p className="text-gray-600 mb-6 text-center md:text-left leading-relaxed">
          {client.partnership.details}
        </p>

        <ul className="space-y-3">
          {client.partnership.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-3 text-gray-700 text-sm sm:text-base"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mb-1 sm:mb-0" />
              <span className="text-center sm:text-left">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientPage;
