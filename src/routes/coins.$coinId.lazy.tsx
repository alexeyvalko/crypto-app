import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/coins/$coinId')({
  component: () => <div>Hello test /coins/$coinId!</div>,
});
