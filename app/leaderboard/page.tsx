'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const leaderboardData = [
  { rank: 1, team: 'TechCorp Tigers', wins: 8, matches: 10, month: 'December', winRate: 80, mvp: 7 },
  { rank: 2, team: 'Innovation Lions', wins: 7, matches: 10, month: 'December', winRate: 70, mvp: 5 },
  { rank: 3, team: 'Digital Hawks', wins: 6, matches: 10, month: 'December', winRate: 60, mvp: 4 },
  { rank: 4, team: 'Alpha Wolves', wins: 5, matches: 10, month: 'December', winRate: 50, mvp: 3 },
  { rank: 5, team: 'Future Falcons', wins: 4, matches: 10, month: 'December', winRate: 40, mvp: 3 },
  { rank: 6, team: 'Smart Panthers', wins: 3, matches: 10, month: 'December', winRate: 30, mvp: 1 },
  { rank: 1, team: 'Digital Hawks', wins: 9, matches: 10, month: 'November', winRate: 90, mvp: 6 },
  { rank: 2, team: 'TechCorp Tigers', wins: 7, matches: 10, month: 'November', winRate: 70, mvp: 5 },
  { rank: 3, team: 'Alpha Wolves', wins: 6, matches: 10, month: 'November', winRate: 60, mvp: 5 },
  { rank: 4, team: 'Innovation Lions', wins: 5, matches: 10, month: 'November', winRate: 50, mvp: 3 },
  { rank: 5, team: 'Future Falcons', wins: 4, matches: 10, month: 'November', winRate: 40, mvp: 2 },
  { rank: 6, team: 'Smart Panthers', wins: 2, matches: 10, month: 'November', winRate: 20, mvp: 2 },
];

export default function Leaderboard() {
  const [selectedMonth, setSelectedMonth] = useState('December');

  const filteredData = leaderboardData
    .filter(team => team.month === selectedMonth)
    .sort((a, b) => a.rank - b.rank);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-50 border-yellow-200';
      case 2:
        return 'bg-gray-50 border-gray-200';
      case 3:
        return 'bg-amber-50 border-amber-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b via-gray-100 to-white overflow-hidden transition-all duration-500">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000015,_transparent_80%),_radial-gradient(circle_at_bottom_right,_#ff660010,_transparent_90%),_radial-gradient(circle_at_top_left,_#ffffff05,_transparent_80%)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold mb-6 text-black"
          >
            <span className="text-red-600">Leaderboard</span>
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Track team performance, celebrate victories, and keep the competitive spirit alive.
          </p>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 inset-0 bg-[radial-gradient(circle_at_right,_#ff000010,_transparent_80%)]">
        <div className="max-w-5xl mx-auto px-6 relative z-10 ">

          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl border border-gray-200 shadow-md "
          >
            <div className="flex items-center mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Tournament Results</h2>
            </div>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-700">Month:</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[160px] bg-red-600 text-white rounded-md">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="December">December 2025</SelectItem>
                  <SelectItem value="November">November 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-600 to-red-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">Team</th>
                  <th className="px-6 py-4 text-center font-semibold">Wins</th>
                  <th className="px-6 py-4 text-center font-semibold">Matches</th>
                  <th className="px-6 py-4 text-center font-semibold">Win Rate</th>
                  <th className="px-6 py-4 text-center font-semibold">MVP</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((team, index) => (
                  <motion.tr
                    key={`${team.team}-${team.month}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`border-b ${getRankBg(team.rank)} hover:bg-red-50 transition-all`}
                  >
                    <td className="px-6 py-4 text-center">{getRankIcon(team.rank)}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">{team.team}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">{team.wins}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{team.matches}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{team.mvp}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${team.winRate}%` }}
                            transition={{ duration: 1 }}
                            className="bg-red-600 h-2 rounded-full"
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{team.winRate}%</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          >
            {[
              { icon: <Trophy className="h-10 w-10 text-red-600 mx-auto mb-3" />, title: 'Active Teams', value: filteredData.length },
              { icon: <Medal className="h-10 w-10 text-blue-600 mx-auto mb-3" />, title: 'Total Matches', value: filteredData.reduce((t, i) => t + i.matches, 0) },
              { icon: <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />, title: 'Top Win Rate', value: `${filteredData[0]?.winRate}%` },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-white p-6 border border-gray-200 rounded-2xl text-center shadow-lg hover:shadow-red-300"
              >
                {stat.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
