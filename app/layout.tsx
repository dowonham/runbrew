import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RUN:BREW',
  description: 'Every kilometer converts to caffeine.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-brew-gray-50 flex justify-center min-h-screen">
        <div className="w-full max-w-[390px] bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
