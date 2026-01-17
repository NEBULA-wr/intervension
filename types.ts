
export interface Caudillo {
  id: string;
  name: string;
  country: string;
  period: string;
  description: string;
  imageUrl: string;
  legacy: string;
  tags: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'politic' | 'social' | 'conflict' | 'economic';
}

export interface EconomicData {
  label: string;
  value: string;
  context: string;
}

export enum Section {
  HERO = 'hero',
  CONTEXT = 'context',
  TIMELINE = 'timeline',
  ECONOMY = 'economy',
  INSTITUTIONS = 'institutions',
  RESISTANCE = 'resistance',
  REFLECTION = 'reflection'
}
