import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { DEFAULT_THEME_STORAGE_KEY } from './components/theme-provider/constants';

import { MainLayout } from './components/main-layout';
import { ThemeProvider } from './components/theme-provider';
import { MainPage } from './pages';

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
