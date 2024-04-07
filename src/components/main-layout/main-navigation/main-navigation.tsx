import React from 'react';
import { Link } from '@tanstack/react-router';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui';

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
          <Link to="/" className={cn(navLinkClassName, linkClassName)}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClassName}>
          <Link to="/about" className={cn(navLinkClassName, linkClassName)}>
            About
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
