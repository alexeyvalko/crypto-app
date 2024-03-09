import { ThemeModeToggle } from '@/components/theme-mode-toggle';

import { cn } from '@/utils';

import { MainNavigation } from '../main-navigation';
import { MobileMenu } from '../mobile-menu';
import { Search } from '../search';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={cn(styles.header, 'basePadding', 'md:px-14')}>
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
