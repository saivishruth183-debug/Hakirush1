import Image from "next/image";
import { clients } from "../data/clients";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ClientPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return clients.map((client) => ({ id: client.id }));
}

const ClientPage = ({ params }: ClientPageProps) => {
  const client = clients.find((c) => c.id === params.id);

  if (!client) {
    return <p className="text-center mt-20 text-gray-400">Client not found.</p>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white overflow-hidden">
      {/* Soft radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#ff000010,_transparent_70%)]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 py-28">
        {/* Client Card */}
        <div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ rotateY: 6, rotateX: -2, scale: 1.03 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className="relative bg-zinc-900/70 border border-red-600/30 shadow-red-600 rounded-3xl shadow-lg overflow-hidden p-10"
        >
          {/* Gradient Glow Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-10 blur-3xl" />

          {/* Header Section */}
          <div className="relative z-10 flex flex-col items-center text-center mb-10">
            {/* Logo */}
            <div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-40 h-20 bg-zinc-800 rounded-xl shadow-md flex items-center justify-center mb-6 relative overflow-hidden"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Name and Description */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-red-500 mb-4">
              {client.name}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {client.description}
            </p>
          </div>

          {/* Partnership Section */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative z-10 bg-gradient-to-br from-zinc-800/70 to-zinc-900/80 border border-zinc-700/50 rounded-2xl p-8 shadow-inner"
          >
            <h2 className="text-2xl font-semibold text-red-400 mb-4 text-center md:text-left">
              {client.partnership.title}
            </h2>
            <p className="text-gray-400 mb-6 text-center md:text-left leading-relaxed">
              {client.partnership.details}
            </p>

            <ul className="space-y-4">
              {client.partnership.highlights.map((highlight, index) => (
                <li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
