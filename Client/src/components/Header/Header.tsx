import {
  Flex,
  Icon,
  IconButton,
  Slide,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Portal,
} from '@chakra-ui/react';
import { CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { MobileMenu } from './MobileMenu';
import { CgMenuGridO } from '../../icons';
import { Search } from './Search';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgIcon = useColorModeValue('gray.500', 'gray.200');
  const bg = useColorModeValue('white', 'gray.800');

  const toggleMenu = () => {
    if (isOpen) {
      setTimeout(() => onClose(), 500);
    } else {
      onOpen();
    }
  };

  return (
    <Flex
      as="header"
      color="white"
      w="full"
      justify={{ base: 'space-between', lg: 'flex-end' }}
      align="center"
      h="16"
      position="sticky"
      top={0}
      left={0}
      zIndex={10}
      bgColor={bg}
      mb="10px"
      gap="50px"
    >
      <IconButton
        display={{ base: 'flex', lg: 'none' }}
        alignItems="center"
        justifyContent="center"
        onClick={toggleMenu}
        variant="ghost"
        aria-label="Color mode"
        icon={
          isOpen ? (
            <CloseIcon color={bgIcon} />
          ) : (
            <Icon as={CgMenuGridO} w="24px" h="24px" color={bgIcon} />
          )
        }
      />

      <Search />
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Color mode"
        icon={
          colorMode === 'light' ? (
            <MoonIcon color={bgIcon} />
          ) : (
            <SunIcon color={bgIcon} />
          )
        }
      />
      <Portal>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
          <MobileMenu toggleMenu={toggleMenu} />
        </Slide>
      </Portal>
    </Flex>
  );
};
