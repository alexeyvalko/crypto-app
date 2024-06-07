import React, { PropsWithChildren, ReactNode } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type TooltipProps = {
  content: ReactNode;
} & PropsWithChildren;

export const TooltipComponent: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="mb-2">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
