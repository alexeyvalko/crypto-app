import { FC } from 'react';

import { cn } from '@/utils';

import { MainNavigation } from '../main-navigation';
import { MobileMenu } from '../mobile-menu';
import { Search } from '../search';

import styles from './header.module.css';

import { ThemeModeToggle } from '@/theme/theme-mode-toggle';

type HeaderProps = {
  className?: string;
  navContainerClassName?: string;
};

export const Header: FC<HeaderProps> = ({ className, navContainerClassName }) => {
  return (
    <header className={cn(styles.header, className)}>
      <div className={cn('flex justify-between', navContainerClassName)}>
        <div className={styles.container}>
          <MobileMenu />
          <MainNavigation className="hidden md:flex" />
        </div>
        <div className={styles.container}>
          <Search />
          <ThemeModeToggle />
        </div>
      </div>
    </header>
  );
};
