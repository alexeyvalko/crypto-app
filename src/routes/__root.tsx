import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router';

import { App } from '@/app';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <App>
      <Outlet />
      <ScrollRestoration />
    </App>
  ),
});
