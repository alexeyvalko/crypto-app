import { createLazyFileRoute } from '@tanstack/react-router';

import { AboutPage } from '@/pages/about-page';
import { ErrorPage } from '@/pages/error-page';

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
  errorComponent: ErrorPage,
});
