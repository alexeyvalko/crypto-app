import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const Home: FC = () => (
  <Box
    className="app"
    paddingRight={{ base: 5, md: 10 }}
    paddingLeft={{ base: 5, md: 10 }}
  >
    <Header />
    <Flex as="main" w="full">
      <Sidebar />
      <Box className="content" flex={1} overflow="hidden">
        <Box minH='calc(100vh - 128px)'>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Flex>
  </Box>
);
