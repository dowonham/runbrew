"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function NewMeetingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const STEPS = ["기본 정보", "카페 연결", "모집 시작", "러닝 기록"];

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="px-6 pt-6 pb-4 border-b border-brew-gray-100 flex items-center justify-between shrink-0 bg-white relative z-10">
        <button onClick={() => step === 0 ? router.back() : prevStep()} className="text-[14px] font-bold text-brew-gray-500 active:text-brew-gray-900 transition-colors py-2 pr-4">
          이전
        </button>
        <div className="flex gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${
              i === step ? 'w-6 bg-brew-green-400' : 
              i < step ? 'w-2 bg-brew-gray-300' : 'w-2 bg-brew-gray-100'
            }`} />
          ))}
        </div>
        <button onClick={step === 3 ? () => router.push('/community') : nextStep} className="text-[14px] font-bold text-brew-green-600 active:text-brew-green-800 transition-colors py-2 pl-4">
          {step === 3 ? '완료' : '다음'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="0" initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-20, opacity:0}} transition={{duration:0.2}}>
              <h2 className="text-[20px] font-black text-brew-gray-900 mb-6 tracking-tight">어떤 모임인가요?</h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['카페 경유런', '러닝 후 시음회', '드립백 교환런', '러너 카페 투어'].map(type => (
                  <button key={type} className="border border-brew-gray-200 rounded-xl p-4 text-left font-bold text-[13px] text-brew-gray-600 focus:border-brew-green-400 focus:bg-brew-green-50 focus:text-brew-green-800 transition-colors">
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <input type="datetime-local" className="px-4 py-3.5 bg-brew-gray-50 border border-brew-gray-200 rounded-xl text-[14px] font-bold w-full outline-none focus:border-brew-green-400 transition-colors text-brew-gray-900"/>
                <input type="number" placeholder="거리 목표 (km)" className="px-4 py-3.5 bg-brew-gray-50 border border-brew-gray-200 rounded-xl text-[14px] font-bold w-full outline-none focus:border-brew-green-400 transition-colors placeholder:font-medium placeholder:text-brew-gray-400 text-brew-gray-900"/>
                <input type="number" placeholder="최대 인원" className="px-4 py-3.5 bg-brew-gray-50 border border-brew-gray-200 rounded-xl text-[14px] font-bold w-full outline-none focus:border-brew-green-400 transition-colors placeholder:font-medium placeholder:text-brew-gray-400 text-brew-gray-900"/>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="1" initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-20, opacity:0}} transition={{duration:0.2}}>
              <h2 className="text-[20px] font-black text-brew-gray-900 mb-1 tracking-tight">카페 연결</h2>
              <p className="text-[13px] text-brew-gray-500 font-medium mb-6">경유할 카페를 선택하면 오너에게 알림이 갑니다.</p>

              <div className="flex flex-col gap-3">
                {['로우키 성수', '메쉬 커피', '카멜 커피'].map(cafe => (
                  <button key={cafe} className="border border-brew-gray-200 rounded-xl p-5 text-left font-bold text-[15px] focus:border-brew-green-400 focus:bg-brew-green-50 focus:text-brew-green-800 flex justify-between items-center group transition-colors">
                    {cafe}
                    <div className="w-5 h-5 rounded-full border-2 border-brew-gray-300 group-focus:border-brew-green-400 flex justify-center items-center transition-colors">
                       <div className="w-2.5 h-2.5 bg-brew-green-400 rounded-full opacity-0 group-focus:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-brew-gray-50 rounded-xl border border-brew-gray-100">
                <p className="text-[12px] font-bold text-brew-gray-900 mb-1">💡 카페 알림 시스템</p>
                <p className="text-[12px] text-brew-gray-600 leading-relaxed font-medium">인원이 확정되면 선택한 카페로 얼음물과 좌석 배정을 위한 예상 방문 정보가 자동으로 전달됩니다.</p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-20, opacity:0}} transition={{duration:0.2}}>
              <div className="bg-brew-green-400 p-6 rounded-2xl text-white mb-8 shadow-xl shadow-brew-green-400/20">
                <span className="bg-white/20 text-white px-2 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase">모임 개설 완료</span>
                <h2 className="text-[22px] font-black mt-4 mb-1 tracking-tight">성수동 카페 경유런</h2>
                <p className="text-[13px] font-bold opacity-90 mb-5">10.28 (토) 08:00 • 목적지: 로우키 성수</p>
                <div className="border-t border-white/20 pt-4 flex gap-6">
                  <div>
                    <p className="text-[10px] font-black opacity-70 uppercase tracking-widest mb-1 mt-0.5">목표</p>
                    <p className="text-[15px] font-bold font-mono">5.0 km</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black opacity-70 uppercase tracking-widest mb-1 mt-0.5">인원</p>
                    <p className="text-[15px] font-bold font-mono">1 / 10명</p>
                  </div>
                </div>
              </div>

              <h3 className="text-[14px] font-bold text-brew-gray-900 mb-3 ml-1 block">참가자 공동 적립 안내</h3>
              <div className="p-5 border border-brew-gray-200 rounded-xl bg-brew-gray-50">
                <p className="text-[13px] text-brew-gray-600 font-medium leading-relaxed">
                  이 모임이 성공적으로 완료되면 <b className="text-brew-gray-900">5.0km x 10명 = 250ml</b> 가 참가자 모두의 공동 드립 저장소에 추가됩니다.
                </p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} exit={{x:-20, opacity:0}} transition={{duration:0.2}}>
              <h2 className="text-[20px] font-black text-brew-gray-900 mb-6 mt-2 tracking-tight">러닝 종료 및 기록</h2>
              
              <div className="p-6 border-2 border-brew-green-400 rounded-2xl flex flex-col items-center justify-center mb-8 shadow-sm">
                <p className="text-[12px] font-black text-brew-green-600 mb-1">공동 적립 달성!</p>
                <p className="text-[46px] font-black italic text-brew-green-600 leading-none mb-1 tracking-tighter drop-shadow-sm">+250<span className="text-[18px] not-italic tracking-normal ml-0.5">ml</span></p>
                <p className="text-[11px] font-bold text-brew-green-700 bg-brew-green-50 px-2 py-1 rounded mt-3">모임 전원 완주 축하합니다</p>
              </div>

              <h3 className="text-[14px] font-bold text-brew-gray-900 mb-3 ml-1">함께한 러너들</h3>
              <div className="flex gap-2 mb-10 pl-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-brew-gray-200 border-[1.5px] border-white shadow-sm" />
                ))}
                <div className="w-10 h-10 rounded-full bg-brew-gray-50 border-[1.5px] border-brew-gray-200 flex items-center justify-center text-[11px] font-black text-brew-gray-500">+5</div>
              </div>

              <button onClick={() => router.push('/community')} className="w-full bg-[#1a1a1a] text-white py-[16px] rounded-xl font-bold text-[14px] active:scale-[0.98] transition-transform shadow-lg shadow-black/20">
                내 피드에 공유하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
