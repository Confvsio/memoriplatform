// types/dictionary.ts

export interface Dictionary {
    metadata: {
      title: string;
      description: string;
    };
    landing: {
      welcome: string;
      description: string;
      loginButton: string;
      signupButton: string;
    };
    dashboard: {
      welcome: string;
      description: string;
    };
  }