import React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui';

import { cn } from '@/utils';

type MainNavigation = {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
};

export const MainNavigation: React.FC<MainNavigation> = ({
  className,
  listClassName,
  itemClassName,
  linkClassName,
}) => {
  const navLinkClassName = navigationMenuTriggerStyle();

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className={listClassName}>
        <NavigationMenuItem className={itemClassName}>
          <NavigationMenuLink className={cn(navLinkClassName, linkClassName)}>Home</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClassName}>
          <NavigationMenuLink className={cn(navLinkClassName, linkClassName)}>About</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
