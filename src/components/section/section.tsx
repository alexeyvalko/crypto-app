import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils';

type SectionProps = {
  title?: string;
  className?: string;
  titleClassName?: string;
} & PropsWithChildren;

export const Section: React.FC<SectionProps> = ({ title, className, titleClassName, children }) => {
  return (
    <section className={cn('m-2', className)}>
      {title && (
        <h2 className={cn('text-xl font-semibold leading-none tracking-tight mb-4 mt-4 ml-2', titleClassName)}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
