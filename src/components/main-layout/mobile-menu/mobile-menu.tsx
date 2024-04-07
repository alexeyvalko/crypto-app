import { Menu } from 'lucide-react';

import { Button, Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui';

import { MainNavigation } from '../main-navigation';

import styles from './mobile-menu.module.css';

export const MobileMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex md:hidden " asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose>
          <MainNavigation
            listClassName={styles.listMobileMenu}
            className="max-w-full p-3 block"
            itemClassName="w-full"
            linkClassName="w-full"
            isMobile={true}
          />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
