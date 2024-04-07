import React, { PropsWithChildren, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import NProgress from 'nprogress';

import { cn } from '@/utils';

import { Header } from './header';

import styles from './main-layout.module.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const horizontalClassName = 'px-2 md:px-6';

  useEffect(() => {
    NProgress.configure({ showSpinner: false, minimum: 0.33 });
    const unSubBeforeLoad = router.subscribe('onBeforeLoad', () => {
      NProgress.start();
    });
    const unSubOnLoad = router.subscribe('onLoad', () => {
      NProgress.done();
    });

    return () => {
      unSubBeforeLoad();
      unSubOnLoad();
    };
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Header className={horizontalClassName} />
      <main className={cn(styles.main, horizontalClassName)}>{children}</main>
      <footer className={cn('text-center md:text-right', horizontalClassName, 'py-4')}>
        Made by{' '}
        <a href="https://github.com/alexeyvalko" className="font-medium" target="_blank" rel="noreferrer">
          @alexeyvalko
        </a>
      </footer>
    </div>
  );
};
