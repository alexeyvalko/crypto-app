import React, { PropsWithChildren } from 'react';

import { Skeleton } from '..';

import { cn } from '@/utils';

type SectionProps = {
  title?: string;
  isLoading?: boolean;
  className?: string;
  titleClassName?: string;
} & PropsWithChildren;

export const Section: React.FC<SectionProps> = ({ title, className, titleClassName, children, isLoading }) => {
  return (
    <section className={cn('mt-6', className)}>
      {isLoading && <Skeleton className="ml-2 w-[120px] h-4 mb-4" />}
      {title && !isLoading && (
        <h2 className={cn('text-xl font-semibold leading-none tracking-tight mb-4 mt-4 ml-2', titleClassName)}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
