import { FC } from 'react';
import { Wrap, Box, WrapItem, Icon } from '@chakra-ui/react';
import { routes } from '../../routes/routes';
import { SidebarLink } from './SidebarLink';

export const Sidebar: FC = () => (
  <Box
    display={{ base: 'none', lg: 'block' }}
    as="aside"
    pos="sticky"
    top="64px"
    overscrollBehavior="contain"
    flexShrink={0}
    pl="10"
    pr="10"
    w={{ base: 'full', lg: '280px' }}
    h="calc(100vh - 5rem)"
  >
    <Box as="nav">
      <Wrap direction="column" spacing={3}>
        {routes.map(({ path, name, icon }) => (
          <WrapItem key={path}>
            <SidebarLink path={path} name={name}>
              <Icon as={icon} color="white" />{' '}
            </SidebarLink>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  </Box>
);
