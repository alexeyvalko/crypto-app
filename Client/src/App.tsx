import './styles/main.css';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages';
import { theme } from './theme/theme';
import { Dashboard } from './components/Dashboard/Dashboard';
import { About } from './components/About/About';
import { TopCoins } from './components/TopCoins/TopCoins';

export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="top" element={<TopCoins />} />
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </ChakraProvider>
);
