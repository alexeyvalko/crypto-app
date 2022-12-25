import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const Home: FC = () => (
  <Box paddingRight={{ base: 5, md: 10 }} paddingLeft={{ base: 5, md: 10 }}>
    <Header />
    <Flex as="main" w="full" mt="24px">
      <Sidebar />
      <Box
        className="content"
        flex={1}
        overflow="hidden"
        margin="auto"
        maxW="1400px"
      >
        <Box minH="calc(100vh - 162px)">
          <Outlet />
        </Box>
      </Box>
    </Flex>
    <Footer />
  </Box>
);
