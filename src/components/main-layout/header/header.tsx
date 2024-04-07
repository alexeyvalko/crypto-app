import { FC } from 'react';

import { cn } from '@/utils';

import { MainNavigation } from '../main-navigation';
import { MobileMenu } from '../mobile-menu';
import { Search } from '../search';

import styles from './header.module.css';

import { ThemeModeToggle } from '@/theme/theme-mode-toggle';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.header, 'py-4', className)}>
      <div className={styles.container}>
        <MobileMenu />
        <MainNavigation className="hidden md:flex" />
      </div>
      <div className={styles.container}>
        <Search />
        <ThemeModeToggle />
      </div>
    </header>
  );
};
