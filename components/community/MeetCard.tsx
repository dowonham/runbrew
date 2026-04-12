"use client";

import { Calendar, Users } from 'lucide-react';

interface MeetCardProps {
  title: string;
  date: string;
  location: string;
  members: number;
  maxMembers: number;
  status: 'open' | 'hot' | 'closed';
}

export default function MeetCard({ title, date, location, members, maxMembers, status }: MeetCardProps) {
  const isHot = status === 'hot';
  const isClosed = status === 'closed';

  return (
    <div className={`p-5 bg-white rounded-2xl transition-all ${
      isHot ? 'border-[1.5px] border-brew-coral-400 shadow-md' : 'border border-brew-gray-200'
    }`}>
      {isHot && (
        <span className="inline-block bg-brew-coral-50 text-brew-coral-400 text-[10px] font-black px-2 py-0.5 rounded-sm tracking-wider mb-2">
          마감 임박 🔥
        </span>
      )}
      <h3 className="text-[17px] font-black text-brew-gray-900 leading-snug tracking-tight mb-2">
        {title}
      </h3>
      <div className="flex gap-4 text-[12px] font-medium text-brew-gray-500 mb-4">
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {date}</span>
        <span>📍 {location}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full bg-brew-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                <Users size={10} className="text-brew-gray-400" />
              </div>
            ))}
          </div>
          <span className="text-[12px] font-bold text-brew-gray-900">
            {members} <span className="text-brew-gray-400 font-medium">/ {maxMembers}명</span>
          </span>
        </div>

        <button 
          disabled={isClosed}
          className={`px-5 py-2.5 rounded-xl font-bold text-[13px] transition-transform active:scale-95 ${
            isClosed ? 'bg-brew-gray-100 text-brew-gray-400 cursor-not-allowed' :
            isHot ? 'bg-brew-coral-400 text-white' : 
            'bg-[#1a1a1a] text-white'
          }`}
        >
          {isClosed ? '마감됨' : '참가하기'}
        </button>
      </div>
    </div>
  );
}
