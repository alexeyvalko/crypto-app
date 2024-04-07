import { createLazyFileRoute } from '@tanstack/react-router';

import { CoinPage } from '@/pages';
import { ErrorPage } from '@/pages/error-page';

export const Route = createLazyFileRoute('/coins/$coinId')({
  component: CoinPage,
  errorComponent: ErrorPage,
});
