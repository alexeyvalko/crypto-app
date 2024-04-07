import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { App } from '@/app';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <App>
        <Outlet />
        {/* <ScrollRestoration /> */}
      </App>
      <TanStackRouterDevtools />
    </>
  ),
});
