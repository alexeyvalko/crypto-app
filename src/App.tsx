import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './components/main-layout';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
};
