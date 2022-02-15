import { FC } from 'react';
import { Wrap, Box, WrapItem } from '@chakra-ui/react';
import { routes } from '../../routes/routes';
import { SidebarLink } from './SidebarLink';

export const Sidebar: FC = () => (
  <Box
    as="aside"
    d="block"
    pos="sticky"
    top="2"
    flexShrink={0}
    pl="10"
    pr="10"
    w="280px"
    h="calc(100vh - 3.5rem)"
  >
    <Box as="nav">
      <Wrap direction="column" spacing={3}>
        {routes.map(({ path, name }) => (
          <WrapItem>
            <SidebarLink path={path} name={name} key={path} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  </Box>
);
