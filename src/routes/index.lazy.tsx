import { createLazyFileRoute } from '@tanstack/react-router';

import { MainPage } from '@/pages';
import { ErrorPage } from '@/pages/error-page';

export const Route = createLazyFileRoute('/')({
  component: MainPage,
  errorComponent: ErrorPage,
});
