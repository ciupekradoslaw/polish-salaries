export interface Salary {
  id: number;
  title: string;
  category: string;
  icon: string;
  gross: number;
  net: number;
  source: string;
  vsAverage: string;
  isAboveAverage: boolean;
}

export interface StatItem {
  label: string;
  value: string;
}
