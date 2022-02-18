import { FC } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { routes } from '../../routes/routes';
import { SidebarLink } from '../Sidebar/SidebarLink';

type Props = {
  isOpen: boolean;
  toggleMenu(): void;
};

export const MobileMenu: FC<Props> = ({ isOpen, toggleMenu }) => (
  <Drawer isOpen={isOpen} placement="bottom" onClose={toggleMenu}>
    <DrawerOverlay />
    <DrawerContent bgColor="gray.800" borderRadius=" 15px 15px 0 0 " pb="24px">
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <Box as="nav">
          <Wrap direction="column" spacing={3}>
            {routes.map(({ path, name, icon }) => (
              <WrapItem key={path} onClick={toggleMenu}>
                <SidebarLink path={path} name={name}>
                  <Icon as={icon} color="white" />
                </SidebarLink>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
