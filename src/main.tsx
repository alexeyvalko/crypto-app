import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import './index.css';
import 'nprogress/nprogress.css';

dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6000,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createRouter({
  routeTree,
  defaultPreload: false,
  context: { queryClient },
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
