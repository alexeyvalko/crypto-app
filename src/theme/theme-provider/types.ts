export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export type Theme = ThemeMode;

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
