export interface Salary {
  id: number;
  slug: string;
  title: string;
  icon: string;
  gross: number;
  net: number;
  source: string;
  vsAverage: string;
  isAboveAverage: boolean;
  relatedSlugs?: string[];
}

export interface StatItem {
  label: string;
  value: string;
}
