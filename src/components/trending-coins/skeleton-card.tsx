import { cn } from '@/utils';

import { Skeleton } from '../ui';

export const SkeletonCard = () => {
  return <Skeleton className={cn('rounded-lg border bg-card text-card-foreground shadow-sm h-[147px] w-full')} />;
};
