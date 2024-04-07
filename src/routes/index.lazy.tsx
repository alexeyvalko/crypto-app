import { createLazyFileRoute } from '@tanstack/react-router';

import { MainPage } from '@/pages';

export const Route = createLazyFileRoute('/')({
  component: MainPage,
});
