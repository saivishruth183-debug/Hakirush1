import { Users, Target, Trophy, Star } from 'lucide-react';

interface AboutPageProps {
  params: { id: string };
}

interface ContentItem {
  title: string;
  content: string;
  icon: any;
}

// Map IDs to content
const contentMap: Record<string, ContentItem> = {
  'whyhakirush': {
    title: 'Why HAKIRUSH?',
    content: "Post-pandemic, employee morale and wellness have taken a hit. HAKIRUSH brings companies together through biweekly sports tournaments, team-building events, and fun rivalries — all managed end-to-end.",
    icon: Target,
  },
  'difference': {
    title: 'How We Make a Difference',
    content: "We transform corporate culture by fostering healthy competition, building stronger teams, and creating memorable experiences that employees talk about long after the games are over.",
    icon: Users,
  },
  'mission': {
    title: 'Our Mission',
    content: "To be India's premier corporate sports engagement platform, helping companies boost employee morale, build team spirit, and create lasting professional relationships through the power of sports.",
    icon: Trophy,
  },
  'choose': {
    title: 'Why Choose HAKIRUSH',
    content: "End-to-end event management, professional coverage, branded kits, transport included, monthly tournaments, and a dedicated leaderboard system that keeps the competitive spirit alive year-round.",
    icon: Star,
  },
};

// Static export requires this
export async function generateStaticParams() {
  return Object.keys(contentMap).map((id) => ({ id }));
}

const AboutPage = ({ params }: AboutPageProps) => {
  const { id } = params;
  const content = contentMap[id];

  if (!content) {
    return <p>Content not found</p>;
  }

  const Icon = content.icon;

  return (
    <div className="mt-24 md:mt-40 mx-4 sm:mx-10 md:mx-20 lg:mx-60 bg-gray-100 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-10 px-4 sm:px-8">
        <div className="p-3 bg-red-100 rounded-lg">
          <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <h1 className="text-2xl sm:text-3xl text-red-600 font-extrabold text-center md:text-left">
          {content.title}
        </h1>
      </div>
      <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-10 md:px-20 lg:px-40 pb-10 text-center md:text-left leading-relaxed">
        {content.content}
      </p>
    </div>
  );
};

export default AboutPage;
