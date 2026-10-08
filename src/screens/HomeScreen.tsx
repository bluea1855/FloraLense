import { Leaf, WifiOff, Sparkles } from 'lucide-react';
import { ScanButton } from '@/components/ScanButton';
import { ScanCard } from '@/components/ScanCard';
import { recentScans } from '@/data/mockData';
import type { Screen } from '@/types';

interface HomeScreenProps {
  onScan: () => void;
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ onScan, onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-stone-50 to-stone-100">
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200/60 bg-emerald-50/80 px-5 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 shadow-sm">
            <Leaf className="text-white" size={18} strokeWidth={2.2} />
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-800">
            FloraLense
          </span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-stone-200/70 px-2.5 py-1 text-xs font-medium text-stone-500">
          <WifiOff size={12} strokeWidth={2.5} />
          Offline
        </span>
      </header>

      <main className="mx-auto max-w-md px-5 pb-24 pt-6">
        {/* Hero copy */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-stone-800">
            Know your plant's health
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              in a single snap
            </span>
          </h1>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-500">
            On-device AI diagnosis — no internet needed. Just point, scan, and
            step outside to fix it.
          </p>
        </div>

        {/* Scan button */}
        <div className="mb-8 flex justify-center">
          <ScanButton onClick={onScan} />
        </div>

        {/* Recent Scans */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-stone-700">Recent Scans</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700">
              <Sparkles size={14} />
              History
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {recentScans.map((scan) => (
              <ScanCard
                key={scan.id}
                scan={scan}
                onClick={() => onNavigate('result')}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
