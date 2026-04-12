"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splash() {
  const router = useRouter();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 1.5s splash-1 -> 1.5s splash-2
    const timer1 = setTimeout(() => setStage(1), 1500);
    return () => clearTimeout(timer1);
  }, []);

  const handleJoin = () => {
    router.push('/home');
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-full flex flex-col min-h-screen bg-[#111]">
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.div
            key="splash-1"
            className="absolute inset-0 z-0 bg-stone-900 bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(/splash-1.png)' }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
        {stage === 1 && (
          <motion.div
            key="splash-2"
            className="absolute inset-0 z-0 bg-zinc-900 bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(/splash-2.png)' }}
            variants={variants}
            initial="enter"
            animate="center"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex-col flex flex-1 w-full p-6 justify-between pt-16">
        <h1 className="text-[#FF3B30] italic font-[900] text-[26px] tracking-widest leading-none">RUN:BREW</h1>
        
        <div className="flex flex-col mb-4">
          <p className="text-white text-[42px] font-black italic leading-[1.05] tracking-tighter">
            Every kilometer<br />converts to<br />caffeine.
          </p>
          <div className="w-[48px] h-[4px] bg-brew-green-400 mt-6 mb-12 rounded-full" />

          <button 
            onClick={handleJoin}
            className="w-full bg-white text-black py-[18px] rounded-full font-bold text-[16px] tracking-wide active:scale-[0.98] transition-transform"
          >
            JOIN THE CLUB
          </button>
        </div>
      </div>
    </div>
  );
}
