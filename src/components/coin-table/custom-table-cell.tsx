import { FC, PropsWithChildren } from 'react';

import { cn } from '@/utils';

import { Skeleton, TableCell } from '../ui';

type CustomTableCellProps = {
  isLoading?: boolean;
  className?: string;
  skeletonClassName?: string;
} & PropsWithChildren;

export const CustomTableCell: FC<CustomTableCellProps> = ({ isLoading, className, children, skeletonClassName }) => (
  <TableCell className={className}>
    {isLoading ? <Skeleton className={cn('w-full h-5', skeletonClassName)} /> : children}
  </TableCell>
);
