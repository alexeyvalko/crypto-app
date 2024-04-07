import { useEffect, useMemo, useState } from 'react';

import { DEFAULT_THEME_STORAGE_KEY } from './constants';

import { ThemeProviderContext } from './context';

import { Theme, ThemeMode, ThemeProviderProps } from './types';

export const ThemeProvider = ({
  children,
  defaultTheme = ThemeMode.SYSTEM,
  storageKey = DEFAULT_THEME_STORAGE_KEY,
  ...props
}: Readonly<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeMode.DARK, ThemeMode.LIGHT);

    if (theme === ThemeMode.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.DARK : ThemeMode.LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      },
    }),
    [storageKey, theme]
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
