"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CupVisualizer from '@/components/home/CupVisualizer';
import { useMlStore } from '@/hooks/useMlStore';
import { DRIP_TARGET } from '@/lib/constants';

export default function HomePage() {
  const router = useRouter();
  const { totalMl, addRun } = useMlStore();
  const [kmInput, setKmInput] = useState('');

  const toGo = Math.max(DRIP_TARGET - totalMl, 0);
  const reached = totalMl >= DRIP_TARGET;

  const handleAddRun = (e: React.FormEvent) => {
    e.preventDefault();
    const km = parseFloat(kmInput);
    if (!isNaN(km) && km > 0) {
      addRun(km);
      setKmInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-6 pb-24">
      <header className="mb-8">
        <h1 className="text-2xl font-black italic text-[#1a1a1a]">YOUR BREW</h1>
        <p className="text-sm text-brew-gray-500 font-medium mt-1">Run to unlock your coffee.</p>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center">
        <CupVisualizer totalMl={totalMl} />
        
        {/* Test Controls (Simulation) */}
        <form onSubmit={handleAddRun} className="mt-8 flex gap-2 w-full max-w-[280px]">
          <input
            type="number"
            step="0.1"
            placeholder="Run distance (km)"
            value={kmInput}
            onChange={(e) => setKmInput(e.target.value)}
            className="flex-1 bg-brew-gray-50 border border-brew-gray-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:border-brew-green-400"
          />
          <button 
            type="submit" 
            className="bg-black text-white px-4 rounded-xl font-bold text-sm"
          >
            Add +
          </button>
        </form>
      </div>

      <div className="mt-8">
        {reached ? (
          <button 
            onClick={() => router.push('/drip')}
            className="w-full bg-brew-coral-400 text-white py-4 rounded-full font-bold text-[16px] shadow-lg shadow-brew-coral-400/30 active:scale-95 transition-all"
          >
            드립백 선택하기 →
          </button>
        ) : (
          <button 
            disabled
            className="w-full bg-brew-green-400 text-white py-4 rounded-full font-bold text-[16px] opacity-90"
          >
            드립백 받기까지 {toGo}ml 남음
          </button>
        )}
      </div>
    </div>
  );
}
