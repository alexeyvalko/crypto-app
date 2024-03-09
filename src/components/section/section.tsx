import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils';

type SectionProps = {
  title?: string;
  className?: string;
} & PropsWithChildren;

export const Section: React.FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={cn('m-2', className)}>
      {title && <h2 className="text-xl font-semibold leading-none tracking-tight mb-4 mt-4 ml-2">{title}</h2>}
      {children}
    </section>
  );
};
