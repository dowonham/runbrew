"use client";

interface StepDotsProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepDots({ currentStep, totalSteps }: StepDotsProps) {
  return (
    <div className="flex gap-2 justify-center py-4">
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 rounded-full transition-all duration-300 ${
            idx < currentStep 
              ? 'w-6 bg-brew-green-400' 
              : idx === currentStep 
                ? 'w-6 bg-brew-coral-400'
                : 'w-2 bg-brew-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
