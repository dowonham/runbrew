"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Coffee, Users, Package } from 'lucide-react';

const tabs = [
  { path: '/home',      label: '홈',    icon: Home },
  { path: '/cafe',      label: '카페',  icon: Coffee },
  { path: '/community', label: '모임',  icon: Users },
  { path: '/drip',      label: '드립백', icon: Package },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav 
      className="absolute bottom-0 w-full max-w-[390px] bg-white border-t border-brew-gray-200 z-50" 
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="flex h-[60px] items-center justify-around px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname?.startsWith(tab.path);
          return (
            <li key={tab.path} className="flex-1 h-full">
              <Link 
                href={tab.path} 
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                  isActive ? 'text-brew-green-400' : 'text-brew-gray-500 hover:text-brew-gray-900'
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[11px] font-medium">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
