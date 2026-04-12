"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import StepDots from '@/components/drip/StepDots';
import ChoiceCard from '@/components/drip/ChoiceCard';

const STEPS = [
  {
    question: "오늘 러닝은 어떠셨나요?",
    key: "type",
    options: [
      { id: "before", label: "가볍게 뛰기 전" },
      { id: "after_short", label: "짧게 회복런" },
      { id: "after_long", label: "장거리 달렸어요" },
      { id: "after_intense", label: "고강도 인터벌" },
    ]
  },
  {
    question: "어떤 커피 맛을 선호하시나요?",
    key: "flavor",
    options: [
      { id: "light", label: "밝고 산뜻 (산미)" },
      { id: "balanced", label: "균형 잡힌 밸런스" },
      { id: "dark", label: "진하고 묵직한 바디" },
      { id: "idk", label: "잘 모르겠어요" },
    ]
  },
  {
    question: "주로 어떻게 드실 예정인가요?",
    key: "brew",
    options: [
      { id: "hot", label: "뜨겁게" },
      { id: "iced", label: "아이스로" },
      { id: "latte", label: "라떼로" },
      { id: "any", label: "그때그때 다르게" },
    ]
  }
];

export default function DripPreferencePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionId: string) => {
    const currentKey = STEPS[step].key;
    setAnswers(prev => ({ ...prev, [currentKey]: optionId }));
    
    setTimeout(() => {
      if (step < STEPS.length - 1) {
        setStep(s => s + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const getResult = () => {
    const type = answers.type;
    if (type === 'before') return { name: "에티오피아 예가체프", desc: "뛰기 전 가볍게 몸을 깨우는 산뜻한 한 잔", type: "각성형" };
    if (type === 'after_intense' || type === 'after_long') return { name: "콜롬비아 수프리모 디카프", desc: "지친 근육을 부드럽게 이완시키는 디카페인", type: "회복형" };
    return { name: "과테말라 안티구아", desc: "기분 좋은 묵직함으로 러닝의 여운을 즐기는", type: "회복형" };
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-6 pb-24 overflow-hidden">
      {!showResult ? (
        <div className="flex flex-col h-full">
          <header className="mb-6">
            <h1 className="text-2xl font-black text-[#1a1a1a]">DRIP MATCHING</h1>
            <p className="text-sm text-brew-gray-500 font-medium mt-1">나만의 리추얼, 완벽한 커피를 찾아서</p>
          </header>
          
          <StepDots currentStep={step} totalSteps={STEPS.length} />

          <div className="flex-1 relative mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <h2 className="text-[20px] font-bold text-brew-gray-900 mb-6 leading-relaxed">
                  {STEPS[step].question}
                </h2>
                <div className="flex flex-col gap-3">
                  {STEPS[step].options.map(opt => (
                    <ChoiceCard 
                      key={opt.id}
                      label={opt.label}
                      selected={answers[STEPS[step].key] === opt.id}
                      onClick={() => handleSelect(opt.id)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center h-full pt-10"
        >
          <div className="w-16 h-16 bg-brew-coral-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <Check size={32} className="text-brew-coral-400" />
          </div>
          <p className="text-sm font-bold text-brew-coral-400 uppercase tracking-widest mb-2">
            {getResult().type} 추천
          </p>
          <h2 className="text-3xl font-black text-brew-gray-900 mb-4 text-center tracking-tight">
            {getResult().name}
          </h2>
          <p className="text-brew-gray-500 text-center mb-10 text-[15px] px-4 font-medium leading-relaxed">
            {getResult().desc}
          </p>

          <div className="w-full max-w-[280px]">
            <button className="w-full bg-brew-coral-400 text-white py-[18px] rounded-full font-bold text-[16px] shadow-lg shadow-brew-coral-400/20 active:scale-95 transition-transform">
              드립백 신청 완료
            </button>
            <button 
              onClick={() => { setShowResult(false); setStep(0); setAnswers({}); }}
              className="w-full mt-4 bg-white text-brew-gray-500 py-[16px] rounded-full font-bold text-[15px] active:bg-brew-gray-50 transition-colors"
            >
              다시 선택하기
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
