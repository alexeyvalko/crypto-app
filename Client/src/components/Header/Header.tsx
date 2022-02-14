import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from "react";

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      color="white"
      w="full"
      justify="flex-end"
      pr="10"
      pl="10"
      align="center"
      h="14"
    >
      <Button onClick={toggleColorMode} variant='ghost'>
        {colorMode === 'light' ? <MoonIcon color="darkgray" /> : <SunIcon />}
      </Button>
    </Flex>
  );
};
