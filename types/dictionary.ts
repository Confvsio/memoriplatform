// types/dictionary.ts

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    pricing: string;
    about: string;
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
}