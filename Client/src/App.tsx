import './styles/main.css';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages';
import { theme } from './theme/theme';
import { About, Dashboard } from './components';


export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
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
