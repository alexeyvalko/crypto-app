import React, { PropsWithChildren } from 'react';

import { cn } from '@/utils';

import { Header } from './header';

import styles from './main-layout.module.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={cn(styles.main, 'basePaddingHorizontal')}>{children}</main>
      <footer className={cn('basePadding')}>footer!!!!!!!</footer>
    </div>
  );
};
