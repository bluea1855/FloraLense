import type { ScanRecord, DiagnosisResult } from '@/types';

export const recentScans: ScanRecord[] = [
  {
    id: '1',
    name: 'Balcony Tulsi',
    status: 'healthy',
    image:
      'https://images.pexels.com/photos/38541130/pexels-photo-38541130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '2 hrs ago',
  },
  {
    id: '2',
    name: 'Money Plant',
    status: 'needs-water',
    image:
      'https://images.pexels.com/photos/12123230/pexels-photo-12123230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'Yesterday',
  },
  {
    id: '3',
    name: 'Aloe Vera',
    status: 'needs-sun',
    image:
      'https://images.pexels.com/photos/4823081/pexels-photo-4823081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '3 days ago',
  },
];

export const mockDiagnosis: DiagnosisResult = {
  plantName: 'Tulsi (Holy Basil)',
  image:
    'https://images.pexels.com/photos/32112349/pexels-photo-32112349.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  condition: 'Yellowing Leaves',
  confidence: 94,
  diagnosis:
    'Nitrogen Deficiency Detected. The lower leaves are turning pale yellow while veins remain green — a classic chlorosis pattern caused by insufficient nitrogen uptake.',
  action: 'Add compost and ensure proper drainage.',
  severity: 'medium',
};

export const statusConfig: Record<
  ScanRecord['status'],
  { label: string; dot: string; badge: string }
> = {
  healthy: {
    label: 'Healthy',
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
  },
  'needs-water': {
    label: 'Needs Water',
    dot: 'bg-sky-500',
    badge: 'bg-sky-50 text-sky-700',
  },
  'needs-sun': {
    label: 'Needs Sun',
    dot: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-700',
  },
  'pest-risk': {
    label: 'Pest Risk',
    dot: 'bg-rose-500',
    badge: 'bg-rose-50 text-rose-700',
  },
};
