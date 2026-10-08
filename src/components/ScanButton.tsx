import { Camera, ScanLine } from 'lucide-react';

interface ScanButtonProps {
  onClick?: () => void;
}

export function ScanButton({ onClick }: ScanButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center gap-2 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-green-700 px-8 py-10 text-white shadow-xl shadow-emerald-900/30 transition-all hover:shadow-2xl hover:shadow-emerald-900/40 active:scale-95"
    >
      <span
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <Camera
          className="transition-transform duration-300 group-hover:scale-110"
          size={36}
          strokeWidth={1.8}
        />
        <ScanLine
          className="absolute h-10 w-10 text-emerald-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          strokeWidth={2}
        />
      </div>
      <span className="relative mt-1 text-lg font-bold tracking-tight">
        Open Camera & Scan Plant
      </span>
      <span className="relative text-sm text-emerald-100/90">
        Tap to diagnose in seconds
      </span>
    </button>
  );
}
