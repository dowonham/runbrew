"use client";

import { useState } from 'react';

const FILTERS = ["전체", "러너 오너", "코스 경유", "땀 OK", "회복 메뉴"];

export default function FilterChips() {
  const [active, setActive] = useState("전체");

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide px-2 -mx-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {FILTERS.map(f => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-bold transition-all ${
            active === f 
              ? 'bg-brew-green-400 text-white shadow-md shadow-brew-green-400/20' 
              : 'bg-white border border-brew-gray-200 text-brew-gray-500 hover:bg-brew-gray-50'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
