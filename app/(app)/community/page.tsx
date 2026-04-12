"use client";

import { useState } from 'react';
import MeetCard from '@/components/community/MeetCard';
import FeedItem from '@/components/community/FeedItem';
import CrewCard from '@/components/community/CrewCard';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { id: 'meet', label: '모임' },
  { id: 'feed', label: '피드' },
  { id: 'crew', label: '크루' },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('meet');

  return (
    <div className="flex flex-col h-full bg-[#f5f5f0] pb-10 overflow-hidden relative">
      <div className="bg-white px-6 pt-6 pb-2 shrink-0 border-b border-brew-gray-200 relative z-10 box-border block">
        <header className="mb-6">
          <h1 className="text-2xl font-black text-[#1a1a1a] tracking-tight">COMMUNITY</h1>
          <p className="text-[13px] text-brew-gray-500 font-medium mt-1">혼자, 그리고 같이 뛰는 즐거움</p>
        </header>

        <div className="flex bg-brew-gray-50 border border-brew-gray-100 rounded-xl p-1 mb-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-[10px] rounded-lg text-[13px] font-bold transition-all ${
                activeTab === tab.id ? 'bg-white text-brew-gray-900 shadow-sm border border-brew-gray-100' : 'text-brew-gray-500 hover:text-brew-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4" style={{ WebkitOverflowScrolling: 'touch' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'meet' && (
            <motion.div key="meet" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{duration:0.2}} className="flex flex-col gap-4">
              <MeetCard title="토요일 아침 남산 리커버리런" date="10.28 (토) 08:00" location="남산 백범광장" members={18} maxMembers={20} status="hot" />
              <MeetCard title="성수동 하프마라톤 대비 훈련" date="10.29 (일) 07:00" location="서울숲 가족마당" members={8} maxMembers={15} status="open" />
              <MeetCard title="퇴근 후 한강 나이트런" date="10.25 (수) 20:00" location="뚝섬유원지역 2번 출구" members={10} maxMembers={10} status="closed" />
            </motion.div>
          )}

          {activeTab === 'feed' && (
            <motion.div key="feed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{duration:0.2}} className="-mx-6">
              <FeedItem />
              <FeedItem />
              <FeedItem />
            </motion.div>
          )}

          {activeTab === 'crew' && (
            <motion.div key="crew" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{duration:0.2}} className="flex flex-col gap-4">
              <CrewCard />
              <CrewCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {activeTab === 'meet' && (
        <div className="absolute bottom-[20px] right-6 z-20">
          <Link href="/community/new-meeting" className="w-[56px] h-[56px] bg-brew-green-400 text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(29,158,117,0.4)] active:scale-95 transition-transform">
            <Plus size={28} />
          </Link>
        </div>
      )}
    </div>
  );
}
