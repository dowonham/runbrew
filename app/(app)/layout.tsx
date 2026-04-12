import BottomNav from '@/components/ui/BottomNav';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex flex-col h-full relative bg-white">
      {/* 44px 상태바 (Mock) */}
      <div className="h-[44px] shrink-0 flex items-center justify-between px-6 bg-white z-40 border-b border-transparent">
         <span className="text-[15px] font-semibold tracking-tight">9:41</span>
         <span className="text-[13px] font-black italic text-[#FF3B30] tracking-wider relative top-[1px]">RUN:BREW</span>
         <div className="flex items-center gap-1.5 opacity-80">
            <div className="w-4 h-3 bg-black rounded-[2px]"></div> {/* Battery */}
         </div>
      </div>

      <main 
        className="flex-1 overflow-y-scroll pb-[80px]" 
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
