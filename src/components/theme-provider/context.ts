import { createContext } from 'react';

import { ThemeMode, ThemeProviderState } from './types';

const initialState: ThemeProviderState = {
  theme: ThemeMode.SYSTEM,
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
