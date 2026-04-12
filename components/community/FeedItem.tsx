"use client";

import { MessageCircle, Heart, User } from 'lucide-react';

export default function FeedItem() {
  return (
    <div className="p-5 bg-white border-b border-brew-gray-100 mb-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-brew-gray-100 flex items-center justify-center">
          <User size={20} className="text-brew-gray-500"/>
        </div>
        <div>
          <p className="text-[14px] font-bold text-brew-gray-900">도원 러너</p>
          <p className="text-[11px] text-brew-gray-400 font-medium tracking-wide">2시간 전</p>
        </div>
      </div>

      {/* Run Summary Card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-4 text-white flex justify-between items-center mb-4">
        <div>
          <span className="text-[11px] font-bold text-white/60 tracking-wider">AFTERNOON RUN</span>
          <h4 className="text-[24px] font-black italic tracking-tighter leading-none mt-1">5.20 <span className="text-[14px] font-bold not-italic">km</span></h4>
          <p className="text-[13px] font-medium text-white/80 mt-1">5&apos;42&quot; / km</p>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-brew-green-400 flex items-center justify-center relative shadow-[0_0_15px_rgba(29,158,117,0.3)]">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="22" cy="22" r="20" fill="none" stroke="#1D9E75" strokeWidth="2" strokeDasharray="125" strokeDashoffset="20"></circle>
          </svg>
          <span className="text-[11px] font-bold text-brew-green-400">+26ml</span>
        </div>
      </div>

      {/* Coffee Record */}
      <div className="flex gap-3 mb-5 pl-2 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-0 before:w-[2px] before:bg-brew-coral-100">
        <div className="w-2.5 h-2.5 rounded-full bg-brew-coral-400 shrink-0 mt-1.5 relative z-10 shadow-[0_0_0_4px_#fff]" />
        <div>
          <p className="text-[13px] font-bold text-brew-gray-900">메쉬 커피 <span className="text-brew-coral-400 text-[10px] ml-1 bg-brew-coral-50 px-1.5 py-0.5 rounded-sm">RECOVERY</span></p>
          <p className="text-[13px] text-brew-gray-600 font-medium leading-relaxed mt-1">
            땀 쫙 빼고 마시는 시원한 아이스 라떼. 유청 단백질이 포함되어 근육 회복에 즉각적인 도움을 줍니다. 오늘도 맛있게 잘 마셨습니다! ☕️🏃‍♂️
          </p>
        </div>
      </div>

      <div className="flex gap-4 border-t border-brew-gray-50 pt-3">
        <button className="flex items-center gap-1.5 text-brew-gray-500 text-[12px] font-bold active:scale-95 transition-transform">
          <Heart size={16} /> 24
        </button>
        <button className="flex items-center gap-1.5 text-brew-gray-500 text-[12px] font-bold active:scale-95 transition-transform">
          <MessageCircle size={16} /> 3
        </button>
      </div>
    </div>
  );
}
