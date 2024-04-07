import { createFileRoute } from '@tanstack/react-router';

import { coinQueryOptions } from '@/pages/coin-page/coin-query-options';

export const Route = createFileRoute('/coins/$coinId')({
  loader: ({ context: { queryClient }, params: { coinId } }) => {
    return queryClient.ensureQueryData(coinQueryOptions(coinId));
  },
});
