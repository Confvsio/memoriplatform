// types/dictionary.ts

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    pricing: string;
    login: string;
    signup: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    cta: string;
    viewFeatures: string;
    plans: Array<{
      name: string;
      price: string;
      features: string[];
    }>;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    terms: string;
    privacy: string;
  };
  dashboard: {
    welcome: string;
    description: string;
  };
  featuresPage: {
    title: string;
    feature: string;
    free: string;
    premium: string;
    family: string;
    features: Array<{
      name: string;
      free: boolean;
      premium: boolean;
      family: boolean;
    }>;
  };
}