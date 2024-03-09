import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './components/main-layout';
import { MainPage } from './components/pages';
import { ThemeProvider } from './components/theme-provider';
import { DEFAULT_THEME_STORAGE_KEY } from './components/theme-provider/constatnts';

import { ThemeMode } from './components/theme-provider/types';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme={ThemeMode.DARK} storageKey={DEFAULT_THEME_STORAGE_KEY}>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
