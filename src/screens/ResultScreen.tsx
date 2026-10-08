import {
  ArrowLeft,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Footprints,
  Droplets,
  Sun,
  Sparkles,
} from 'lucide-react';
import { mockDiagnosis } from '@/data/mockData';
import type { Screen } from '@/types';

interface ResultScreenProps {
  onNavigate: (screen: Screen) => void;
}

const severityConfig = {
  low: {
    label: 'Low Severity',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    icon: CheckCircle2,
  },
  medium: {
    label: 'Medium Severity',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    icon: AlertTriangle,
  },
  high: {
    label: 'High Severity',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    icon: AlertTriangle,
  },
} as const;

export function ResultScreen({ onNavigate }: ResultScreenProps) {
  const dx = mockDiagnosis;
  const sev = severityConfig[dx.severity];
  const SeverityIcon = sev.icon;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Plant photo header */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={dx.image}
          alt={dx.plantName}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/30" />

        {/* Back button */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-md transition-all hover:bg-white/30 active:scale-90"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Confidence badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md">
          <Sparkles size={14} className="text-emerald-300" />
          {dx.confidence}% match
        </div>

        {/* Plant name overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
            Diagnosis Result
          </p>
          <h1 className="text-2xl font-bold text-white">{dx.plantName}</h1>
          <p className="text-sm text-stone-200">{dx.condition}</p>
        </div>
      </div>

      <main className="mx-auto -mt-6 max-w-md px-5 pb-28">
        {/* AI Analysis card */}
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-lg shadow-stone-900/5">
          {/* Badge row */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white">
              <Cpu size={12} strokeWidth={2.5} />
              Powered by local Gemma Vision
            </span>
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${sev.bg} ${sev.color}`}
            >
              <SeverityIcon size={12} strokeWidth={2.5} />
              {sev.label}
            </span>
          </div>

          {/* Diagnosis text */}
          <div className="mb-4">
            <h2 className="mb-1.5 text-sm font-bold uppercase tracking-wide text-stone-400">
              AI Analysis
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-700">
              {dx.diagnosis}
            </p>
          </div>

          {/* Action box */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
            <div className="mb-1 flex items-center gap-2">
              <Droplets className="text-emerald-600" size={16} />
              <h3 className="text-sm font-bold text-emerald-800">
                Action Required
              </h3>
            </div>
            <p className="text-sm font-medium leading-relaxed text-emerald-900">
              {dx.action}
            </p>
          </div>

          {/* Quick tips */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-stone-50 p-3">
              <Sun className="mb-1.5 text-amber-500" size={18} />
              <p className="text-xs font-semibold text-stone-700">
                4-6 hrs sunlight
              </p>
              <p className="text-xs text-stone-400">Daily exposure</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-3">
              <Droplets className="mb-1.5 text-sky-500" size={18} />
              <p className="text-xs font-semibold text-stone-700">
                Water every 2 days
              </p>
              <p className="text-xs text-stone-400">Check soil moisture</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onNavigate('home')}
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 px-6 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-900/25 transition-all hover:shadow-2xl hover:shadow-emerald-900/35 active:scale-[0.98]"
        >
          <Footprints
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
          Step Outside & Fix It
        </button>

        <button
          onClick={() => onNavigate('home')}
          className="mt-3 w-full rounded-2xl border border-stone-200 bg-white px-6 py-3.5 text-base font-semibold text-stone-600 transition-all hover:border-stone-300 hover:bg-stone-50 active:scale-[0.98]"
        >
          Back to Home
        </button>
      </main>
    </div>
  );
}
