export default function CrewCard() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-brew-gray-200">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h3 className="text-[18px] font-black text-brew-gray-900 tracking-tight">뚝섬 브루어스 빌리지</h3>
          <p className="text-[12px] font-bold text-brew-gray-500 mt-0.5">성동구 • 멤버 42명</p>
        </div>
        <span className="bg-[#1a1a1a] text-white text-[10px] font-bold px-2 py-1 rounded-sm">RANK #3</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5 border-y border-brew-gray-100 py-4">
        <div className="text-center">
          <p className="text-[11px] font-bold text-brew-gray-400 mb-1">이번달 러닝</p>
          <p className="text-[15px] font-black text-brew-gray-900 tracking-tight">1,240 <span className="text-[11px] font-medium">km</span></p>
        </div>
        <div className="text-center border-l border-brew-gray-100">
          <p className="text-[11px] font-bold text-brew-gray-400 mb-1">적립 크루 ML</p>
          <p className="text-[15px] font-black tracking-tight text-brew-green-600">6,200 <span className="text-[11px] font-medium text-brew-green-500">ml</span></p>
        </div>
        <div className="text-center border-l border-brew-gray-100">
          <p className="text-[11px] font-bold text-brew-gray-400 mb-1">경유 카페</p>
          <p className="text-[15px] font-black text-brew-gray-900 tracking-tight">14 <span className="text-[11px] font-medium">곳</span></p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-end mb-1.5">
          <span className="text-[11px] font-bold text-brew-gray-900">다음 커피차 달성까지</span>
          <span className="text-[11px] font-bold text-brew-green-600">82%</span>
        </div>
        <div className="w-full h-2 bg-brew-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-brew-green-400 rounded-full" style={{ width: '82%' }} />
        </div>
      </div>

      <button className="w-full py-3 bg-brew-gray-50 text-brew-gray-900 rounded-xl font-bold text-[13px] mt-1 border border-brew-gray-200">
        크루 합류하기
      </button>
    </div>
  );
}
