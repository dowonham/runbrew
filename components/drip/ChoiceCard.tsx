"use client";

interface ChoiceCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function ChoiceCard({ label, selected, onClick }: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-5 text-left rounded-2xl border-[1.5px] transition-all font-medium flex items-center justify-between group active:scale-[0.98]
        ${selected 
          ? 'border-brew-coral-400 bg-brew-coral-50 shadow-md shadow-brew-coral-400/10 text-brew-coral-800' 
          : 'border-brew-gray-200 bg-white text-brew-gray-900 hover:border-brew-coral-100 hover:bg-brew-coral-50/50'
        }
      `}
    >
      <span className="text-[16px]">{label}</span>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected ? 'border-brew-coral-400' : 'border-brew-gray-300'}
      `}>
        {selected && <div className="w-2.5 h-2.5 bg-brew-coral-400 rounded-full" />}
      </div>
    </button>
  );
}
