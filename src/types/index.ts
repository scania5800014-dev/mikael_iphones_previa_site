export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QualityItem {
  id: string;
  title: string;
  detail: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  badge: 'Novo Lacrado' | 'Seminovo Premium' | 'Destaque';
  storage: string[];
  battery: string;
  colors: string[];
  startingPrice: string;
  category: 'pro' | 'standard' | 'entry';
  condition: string;
  description: string;
  image: string;
}

export interface VideoGuide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  driveViewUrl: string;
  drivePreviewUrl: string;
  tag: string;
  duration?: string;
}
