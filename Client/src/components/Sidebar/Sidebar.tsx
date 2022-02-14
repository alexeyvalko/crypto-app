import { FC } from 'react';
import { Wrap, WrapItem, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

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
      <Wrap direction="column">
        <WrapItem>
          <Link as={RouterLink} to="/">
            Dashboard
          </Link>
        </WrapItem>
        <WrapItem>
          <Link as={RouterLink} to="/about">
            About
          </Link>
        </WrapItem>
      </Wrap>
    </Box>
  </Box>
);
