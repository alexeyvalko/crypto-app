import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const initialConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({ initialConfig });
