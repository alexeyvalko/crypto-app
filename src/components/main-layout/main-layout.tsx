import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils';

import { Header } from './header';

import styles from './main-layout.module.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={cn(styles.main, 'basePaddingHorizontal')}>{children}</main>
      <footer className={cn('basePadding', 'text-center md:text-right', 'md:px-14 pb-6')}>
        Made by{' '}
        <a href="https://github.com/alexeyvalko" className="font-medium">
          @alexeyvalko
        </a>
      </footer>
    </div>
  );
};
