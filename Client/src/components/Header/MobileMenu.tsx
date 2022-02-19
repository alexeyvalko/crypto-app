import { FC } from 'react';
import { Box, Icon, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';
import { routes } from '../../routes/routes';
import { SidebarLink } from '../Sidebar/SidebarLink';

type Props = {
  toggleMenu(): void;
};

export const MobileMenu: FC<Props> = ({ toggleMenu }) => {
  const bg = useColorModeValue('whiteAlpha', 'gray.800');

  const menuStyles = {
    padding: '24px',
    borderRadius: '15px 15px 0 0',
    zIndex: 'full',
  };

  return (
    <Box as="nav" bgColor={bg} sx={menuStyles}>
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
  );
};
