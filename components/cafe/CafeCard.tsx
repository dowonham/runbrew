"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, ChevronDown, ChevronUp } from 'lucide-react';

interface CafeCardProps {
  name: string;
  distance: string;
  tags: string[];
  ownerBadge?: boolean;
}

export default function CafeCard({ name, distance, tags, ownerBadge }: CafeCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 relative ${
        expanded ? 'border-[1.5px] border-brew-green-400 shadow-xl shadow-brew-green-400/10' : 'border border-brew-gray-200 hover:border-brew-gray-300'
      }`}
    >
      <div 
        className="p-5 flex items-center justify-between cursor-pointer relative z-10 bg-white"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-black text-brew-gray-900 tracking-tight">{name}</h3>
            {ownerBadge && (
              <span className="bg-brew-green-50 text-brew-green-600 text-[10px] font-bold px-2 py-0.5 rounded-sm">러너 오너</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-brew-gray-500">
            <span className="flex items-center gap-1.5"><MapPin size={12}/> {distance}</span>
            <span className="flex items-center gap-1.5"><Star size={12} className="text-brew-coral-400 fill-brew-coral-400"/> 4.8 <span className="font-normal text-brew-gray-400">(124)</span></span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map(t => (
              <span key={t} className="bg-brew-gray-50 text-brew-gray-600 text-[10px] font-bold px-2 py-1 rounded-sm border border-brew-gray-100">{t}</span>
            ))}
          </div>
        </div>
        <div className="shrink-0 w-8 h-8 rounded-full bg-brew-gray-50 flex items-center justify-center">
          {expanded ? <ChevronUp size={18} className="text-brew-gray-900" /> : <ChevronDown size={18} className="text-brew-gray-400" />}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-brew-gray-100 bg-brew-gray-50/50 relative z-0"
          >
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-brew-coral-400 mb-1 tracking-wider">RECOMMENDED</p>
                  <p className="text-[14px] font-bold text-brew-gray-900">단백질 쉐이크 라떼</p>
                  <p className="text-[12px] text-brew-gray-500 mt-1 font-medium">러닝 후 단백질 보충을 위한 특제 라떼</p>
                </div>
                <span className="text-[13px] font-black text-brew-gray-900 bg-white px-2 py-1 rounded-md border border-brew-gray-200">6,500원</span>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-brew-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brew-coral-400" />
                <p className="text-[11px] font-bold text-brew-gray-900 mb-1 flex items-center gap-1">오너 한마디 🗣️</p>
                <p className="text-[12px] text-brew-gray-600 leading-relaxed font-medium">
                  &quot;저도 뚝섬 코스 자주 뜁니다! 땀 흘리고 오셔도 전혀 눈치 안 보셔도 돼요. 시원한 얼음물과 수건 준비해 둘게요.&quot;
                </p>
              </div>

              <button className="w-full bg-[#1a1a1a] text-white py-[14px] rounded-xl font-bold text-[14px] mt-1 active:scale-[0.98] transition-transform">
                코스 안내받기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
