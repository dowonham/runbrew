export default function ContextBar() {
  return (
    <div className="bg-brew-gray-50 flex items-center justify-between px-6 py-4 rounded-2xl mb-4 border border-brew-gray-100">
      <div className="flex flex-col">
        <span className="text-[11px] font-bold text-brew-green-600 mb-0.5 tracking-wide">러닝 후 코스 주변</span>
        <span className="text-[14px] font-[800] text-brew-gray-900 tracking-tight">성수동 · 5.2km 완료</span>
      </div>
      <div className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
        회복 모드
      </div>
    </div>
  );
}
