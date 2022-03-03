import {
  Flex,
  Icon,
  IconButton,
  Slide,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Portal,
  Box,
} from '@chakra-ui/react';
import { CloseIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { FC, useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { CgMenuGridO } from '../../icons';
import { Search } from './Search';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayItem, setDisplayItem] = useState<boolean>(true);
  const [displaySearch, setDisplaySearch] = useState<'none' | 'flex'>('none');
  const bgIcon = useColorModeValue('gray.500', 'gray.200');
  const bg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    setDisplaySearch(displayItem ? 'none' : 'flex');
  }, [displayItem]);

  const toggleMenu = () => {
    if (isOpen) {
      setTimeout(() => onClose(), 500);
    } else {
      onOpen();
    }
  };

  const handleClick = () => {
    setDisplayItem(false);
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
        display={{ base: displayItem ? 'flex' : 'none', lg: 'none' }}
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
      <Box
        display={{ base: displaySearch, lg: 'flex' }}
        width={{ base: '100%', lg: '320px' }}
      >
        <Search
          setDisplayItem={(bool: boolean) => {
            setDisplayItem(bool);
          }}
        />
      </Box>

      <Flex
        justifyContent="flex-end"
        gap="10px"
        display={{base: displayItem ? 'flex' : 'none', lg: "flex"}}
      >
        <IconButton
          onClick={handleClick}
          display={{ base: 'inline-flex', lg: 'none' }}
          variant="ghost"
          aria-label="Search"
          icon={<SearchIcon color={bgIcon} />}
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
      </Flex>

      <Portal>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
          <MobileMenu toggleMenu={toggleMenu} />
        </Slide>
      </Portal>
    </Flex>
  );
};
