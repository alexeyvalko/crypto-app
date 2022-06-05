import { Box, Flex, Link, useColorModeValue, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ISearch } from '../../types/coins';

type Props = {
  inputValue: string;
  displaySearch: string;
  searchResult: ISearch[];
};

export const SearchWindow: FC<Props> = ({
  inputValue,
  displaySearch,
  searchResult,
}) => {
  const bgColorHover = useColorModeValue('gray.300', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const hover = {
    backgroundColor: bgColorHover,
  };

  const searchBoxStyles = {
    display: displaySearch,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '10px',
    position: 'fixed',
    top: '58px',
    right: { base: `50%`, lg: '130px' },
    transform: { base: `translateX(50%)`, lg: `translateX(0)` },
    width: {base: "90%", lg: '320px'},
    bgColor,
    padding: '0',
    borderRadius: 'md',
    maxHeight: '290px',
    overflow: 'hidden',
    overflowY:
      inputValue.length >= 2 && searchResult?.length > 5 ? 'scroll' : 'hidden',
    border: '1px solid rgba(160, 174, 192, 0.3)',
    zIndex: 11,
  };

  if (inputValue.length >= 2 && searchResult.length !== 0) {
  return (
    <Box sx={searchBoxStyles}>
      {searchResult?.map(({ name, large, id }) => (
        <Link
          key={id}
          as={RouterLink}
          to={`/coins/${id}`}
          _hover={{ textDecoration: 'none' }}
        >
          <Flex
            justifyContent="space-between"
            align="center"
            w="100%"
            p="20px 25px 20px 25px"
            _hover={hover}
          >
            <Box w="70%" fontWeight={700}>
              {name}
            </Box>
            <Box width={{ base: '20%', sm: '15%' }} display="inline-block">
              <Image
                src={large}
                objectFit="contain"
                boxSize="100%"
                alt={name}
                borderRadius="50%"
                width="40px"
                height="40px"
              />
            </Box>
          </Flex>
        </Link>
      ))}
    </Box>
  );
}
  
    return (
      <Box sx={searchBoxStyles}>
        <Box p="20px 25px 20px 25px">Type at least 2 characters to search</Box>
      </Box>
    );

};
