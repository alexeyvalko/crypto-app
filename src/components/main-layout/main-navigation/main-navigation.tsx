import React from 'react';
import { Link } from '@tanstack/react-router';

import {
  DrawerClose,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui';

import { cn } from '@/utils';

type MainNavigation = {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  isMobile?: boolean;
};

export const MainNavigation: React.FC<MainNavigation> = ({
  className,
  listClassName,
  itemClassName,
  linkClassName,
  isMobile = false,
}) => {
  const navLinkClassName = navigationMenuTriggerStyle();

  const menuItems = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
  ];

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className={listClassName}>
        {menuItems.map(({ label, to }) => (
          <NavigationMenuItem className={itemClassName} key={label}>
            {!isMobile && (
              <Link to={to} className={cn(navLinkClassName, linkClassName)}>
                {label}
              </Link>
            )}

            {isMobile && (
              <DrawerClose asChild>
                <Link to={to} className={cn(navLinkClassName, linkClassName)}>
                  {label}
                </Link>
              </DrawerClose>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
