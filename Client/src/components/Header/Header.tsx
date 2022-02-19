import {
  Flex,
  Icon,
  IconButton,
  Slide,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CgMenuGridO } from 'react-icons/cg';
import { FC } from 'react';
import { MobileMenu } from './MobileMenu';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgIcon = useColorModeValue('gray.500', 'gray.200');

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
      paddingRight={{ base: 5, md: 10 }}
      paddingLeft={{ base: 5, md: 10 }}
      align="center"
      h="16"
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
            <CloseIcon color={bgIcon}/>
          ) : (
            <Icon as={CgMenuGridO} w="24px" h="24px" color={bgIcon} />
          )
        }
      />

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

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
        <MobileMenu toggleMenu={toggleMenu} />
      </Slide>
    </Flex>
  );
};
