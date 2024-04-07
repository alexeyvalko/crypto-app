import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { App } from '@/app';

export const Route = createRootRoute({
  component: () => (
    <>
      <App>
        <Outlet />
      </App>
      <TanStackRouterDevtools />
    </>
  ),
});
