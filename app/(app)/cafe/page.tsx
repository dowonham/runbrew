import ContextBar from '@/components/cafe/ContextBar';
import FilterChips from '@/components/cafe/FilterChips';
import CafeCard from '@/components/cafe/CafeCard';
import { Route } from 'lucide-react';

const CAFES = [
  { name: "로우키 성수", distance: "300m", tags: ["땀 OK", "디카페인"], ownerBadge: true },
  { name: "메쉬 커피", distance: "450m", tags: ["회복 메뉴", "산미"], ownerBadge: false },
  { name: "카멜 커피", distance: "600m", tags: ["시그니처", "디저트"], ownerBadge: false },
];

export default function CafePage() {
  return (
    <div className="flex flex-col h-full bg-white px-6 pt-6 pb-24 overflow-hidden">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-black text-[#1a1a1a] tracking-tight">CAFE ROUTE</h1>
          <p className="text-[13px] text-brew-gray-500 font-medium mt-1">도착지가 되는 완벽한 공간</p>
        </div>
      </header>

      <ContextBar />
      <FilterChips />

      <div className="flex flex-col gap-3 mt-3">
        {CAFES.map(c => (
          <CafeCard key={c.name} {...c} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-brew-green-50 border border-brew-green-100 p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
          <Route size={20} className="text-brew-green-600" />
        </div>
        <div>
          <h3 className="text-[13px] font-bold text-brew-green-800 mb-1">가장 인기있는 카페 경유 코스</h3>
          <p className="text-[12px] text-brew-green-700 font-medium leading-relaxed opacity-90">
            성수역 → 뚝섬유원지 → <b className="text-brew-green-800 tracking-wide font-extrabold">로우키 성수</b><br/>
            최근 24명의 러너가 이 코스를 완주했어요.
          </p>
        </div>
      </div>
    </div>
  );
}
