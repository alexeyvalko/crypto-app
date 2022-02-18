import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from 'react';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      color="white"
      w="full"
      justify="flex-end"
      paddingRight={{ base: 5, md: 10 }}
      paddingLeft={{ base: 5, md: 10 }}
      align="center"
      h="14"
    >
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Color mode"
        icon={
          colorMode === 'light' ? <MoonIcon color="darkgray" /> : <SunIcon />
        }
      />
    </Flex>
  );
};
