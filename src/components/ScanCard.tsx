import type { ScanRecord } from '@/types';
import { statusConfig } from '@/data/mockData';
import { ChevronRight } from 'lucide-react';

interface ScanCardProps {
  scan: ScanRecord;
  onClick?: () => void;
}

export function ScanCard({ scan, onClick }: ScanCardProps) {
  const config = statusConfig[scan.status];

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/80 p-2.5 text-left shadow-sm backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-md active:scale-[0.98]"
    >
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={scan.image}
          alt={scan.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span
          className={`absolute left-1 top-1 h-2.5 w-2.5 rounded-full ring-2 ring-white ${config.dot}`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-stone-800">{scan.name}</p>
        <div className="mt-1 flex items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${config.badge}`}
          >
            {config.label}
          </span>
          <span className="text-xs text-stone-400">{scan.date}</span>
        </div>
      </div>

      <ChevronRight
        className="text-stone-300 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-500"
        size={18}
      />
    </button>
  );
}
