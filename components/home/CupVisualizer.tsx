"use client";

import { DRIP_TARGET } from '@/lib/constants';

interface CupVisualizerProps {
  totalMl: number;
}

export default function CupVisualizer({ totalMl }: CupVisualizerProps) {
  const percentage = Math.min((totalMl / DRIP_TARGET) * 100, 100);
  const reached = totalMl >= DRIP_TARGET;

  return (
    <div className="relative flex justify-center items-center w-full aspect-square max-w-[280px] mx-auto">
      <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
        <defs>
          <clipPath id="cup-clip">
            <path d="M 30,20 L 170,20 L 150,220 L 50,220 Z" />
          </clipPath>
        </defs>

        {/* Cup Outline/Background */}
        <path 
          d="M 30,20 L 170,20 L 150,220 L 50,220 Z" 
          fill="#f5f5f0" 
          stroke={reached ? "#D85A30" : "#1D9E75"} 
          strokeWidth="4" 
          strokeLinejoin="round"
        />

        {/* Coffee Fill */}
        <g clipPath="url(#cup-clip)">
          <rect
            x="0"
            y={220 - (200 * (percentage / 100))}
            width="200"
            height="200"
            fill={reached ? "#712B13" : "#0F6E56"}
            className="transition-all duration-700 ease-out"
          />
        </g>

        {/* 150ml Target Line */}
        <line 
          x1="25" y1="20" x2="175" y2="20" 
          stroke="#1D9E75" 
          strokeWidth="2" 
          strokeDasharray="6,4" 
        />
        <text x="180" y="25" fontSize="12" fill="#1D9E75" fontWeight="bold">150ml</text>
      </svg>
      
      {/* ML counter overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-8">
        <span className="text-5xl font-black italic text-white drop-shadow-md">
          {totalMl}
        </span>
        <span className="text-sm font-bold text-white/80 uppercase tracking-widest mt-1">ml</span>
      </div>
    </div>
  );
}
