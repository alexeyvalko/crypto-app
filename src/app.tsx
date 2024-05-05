import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { DEFAULT_THEME_STORAGE_KEY } from './theme/theme-provider/constants';

import { MainLayout } from './components/main-layout';
import { ErrorPage } from './pages/error-page';
import { ThemeProvider } from './theme/theme-provider';

import { ThemeMode } from './theme/theme-provider/types';

export const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme={ThemeMode.DARK} storageKey={DEFAULT_THEME_STORAGE_KEY}>
        <MainLayout>
          <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>
        </MainLayout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
