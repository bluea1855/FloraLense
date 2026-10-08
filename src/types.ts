export type Screen = 'home' | 'result';

export interface ScanRecord {
  id: string;
  name: string;
  status: 'healthy' | 'needs-water' | 'needs-sun' | 'pest-risk';
  image: string;
  date: string;
}

export interface DiagnosisResult {
  plantName: string;
  image: string;
  condition: string;
  confidence: number;
  diagnosis: string;
  action: string;
  severity: 'low' | 'medium' | 'high';
}
