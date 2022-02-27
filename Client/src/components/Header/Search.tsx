import { ChangeEvent, FC, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Image,
  useColorModeValue,
  Portal,
  Link,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { requestSearch } from '../../services/requests/coins';
import { ISearch } from '../../types/coins';

export const Search: FC = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<'none' | 'flex'>('none');
  const [searchResult, setSearchResult] = useState<ISearch[]>();
  const [searchTimeOut, setSearchTimeOut] = useState<NodeJS.Timeout>();
  const bgColor = useColorModeValue('gray.200', 'gray.800');
  const inputColor = useColorModeValue('gray.800', 'gray.200');
  const bgColorHover = useColorModeValue('gray.300', 'gray.700');
  const handleFocus = () => {
    setIsOpenSearch('flex');
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpenSearch('none');
    }, 100);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length >= 2) {
      if (searchTimeOut) clearTimeout(searchTimeOut);
      const timeoutId = setTimeout(async () => {
        const response = await requestSearch(value);
        setSearchResult(response.data.coins);
      }, 1000);
      setSearchTimeOut(timeoutId);
    }
  };

  const hover = {
    backgroundColor: bgColorHover,
  };

  const searchBoxStyles = {
    display: isOpenSearch,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '10px',
    position: 'fixed',
    top: '62px',
    right: { base: `50%`, md: `0` },
    transform: { base: `translateX(50%)`, md: `translateX(-130px)` },
    width: '320px',
    bgColor,
    padding: '10px',
    borderRadius: '10px',
    maxHeight: '500px',
    overflow: 'hidden',
    overflowY: searchResult && searchResult?.length > 5 ? 'scroll' : 'hidden',
    border: '1px solid rgba(160, 174, 192, 0.4)',
    zIndex: 11,
  };

  return (
    <>
      <InputGroup  maxWidth="320px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          color={inputColor}
          autoComplete="off"
          placeholder="Search"
          size="md"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleChange}
        />
      </InputGroup>
      <Portal>
        <Box sx={searchBoxStyles}>
          {searchResult?.map(({ name, large, id }) => (
            <Link
              as={RouterLink}
              to={`/coins/${id}`}
              _hover={{ textDecoration: 'none' }}
            >
              <Flex
                borderRadius="15px"
                justifyContent="space-between"
                align="center"
                w="100%"
                p="10px 15px 10px 15px"
                _hover={hover}
              >
                <Box w="70%" fontWeight={700}>
                  {name}
                </Box>
                <Box width={{ base: '20%', sm: '20%' }} display="inline-block">
                  <Image
                    src={large}
                    objectFit="contain"
                    boxSize="100%"
                    alt={name}
                    borderRadius="50%"
                  />
                </Box>
              </Flex>
            </Link>
          )) || 'Empty'}
        </Box>
      </Portal>
    </>
  );
};
