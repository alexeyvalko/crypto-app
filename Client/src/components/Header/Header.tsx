import {
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { CloseIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { CgMenuGridO } from '../../icons';
import { Search } from './Search';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayItem, setDisplayItem] = useState<boolean>(true);
  const [displaySearch, setDisplaySearch] = useState<'none' | 'flex'>('none');
  const bgIcon = useColorModeValue('gray.500', 'gray.200');
  const bg = useColorModeValue('white', 'gray.800');
  const SHOW = 'flex';
  const HIDE = 'none';
  const CLOSE_MENU_DELAY = 300;


  const handleCloseSearch = (bool:boolean) => {
    setDisplaySearch(bool ? HIDE : SHOW);
    setDisplayItem(bool);
  }

  const toggleMenu = () => {
    if (isOpen) {
      setTimeout(() => onClose(), CLOSE_MENU_DELAY);
    } else {
      onOpen();
    }
  };

  const handleClick = () => {
    setDisplayItem(false);
    setDisplaySearch(SHOW);
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
          isFocused={displaySearch}
          setDisplayItem={handleCloseSearch}
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
     <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </Flex>
  );
};
