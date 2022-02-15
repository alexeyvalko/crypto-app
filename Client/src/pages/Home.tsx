import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components';

export const Home: FC = () => (
    <Box className="app">
      <Header />
      <Flex as="main" w="full">
        <Sidebar />
        <Box className="content" flex={1} overflow="hidden">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
