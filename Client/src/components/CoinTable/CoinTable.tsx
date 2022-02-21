import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useColorModeValue,
  Box,
  Link,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Card } from '../Card/Card';

type Props = {
  items: number;
  size: string;
  minCelWidth: string;
  page: number;
};

export const CoinTable: FC<Props> = ({
  items,
  size,
  minCelWidth,
  page = 0,
}) => {
  const { coinList } = useTypedUseSelector((state) => state.coins);
  const { fetchCoinList } = useActions();
  const borderColor = useColorModeValue('gray.100', 'gray.600');
  const bg = useColorModeValue('gray.200', 'gray.700');

  const tableStart = page * items;

  const listToShow = coinList.slice(tableStart, items + page * items);
  const hoverStyles = {
    bgColor: borderColor,
  };

  const overflowMode = size === 'sm' ? 'visible' : 'scroll';
  const backgroundMode = size === 'sm' ? 'transparent' : bg;
  const sticky = (width: string) => ({
    position: 'sticky',
    zIndex: 2,
    background: { base: bg, lg: backgroundMode, xl: 'transparent' },
    minWidth: minCelWidth,
    top: 0,
    left: { base: 0, sm: width },
    paddingRight: { base: '5px', md: '15px' },
    paddingLeft: { base: '2px', md: '15px' },
  });

  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <Card size="full">
      <Box overflowX={{ base: 'scroll', lg: overflowMode, xl: 'visible' }}>
        <Table variant="unstyled" size={size}>
          <Thead>
            <Tr>
              <Th sx={sticky('0')} display={{ base: 'none', sm: 'table-cell' }}>
                #
              </Th>
              <Th sx={sticky(minCelWidth)}>Name</Th>
              <Th textAlign="end">Current price</Th>
              <Th textAlign="end">24h</Th>
              <Th textAlign="end">7d</Th>
              <Th textAlign="end">Market Cap</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listToShow.map((coin, index) => (
              <Tr
                borderTop="1px solid"
                borderColor={borderColor}
                _hover={hoverStyles}
                key={coin.name}
              >
                <Td
                  sx={sticky('0')}
                  display={{ base: 'none', sm: 'table-cell' }}
                >
                  {index + 1 + tableStart}
                </Td>
                <Td display="flex" alignItems="center" sx={sticky(minCelWidth)}>
                  <Image
                    src={coin.image}
                    objectFit="contain"
                    borderRadius="50%"
                    boxSize="20px"
                    mr="10px"
                    alt={coin.name}
                  />
                  <Link as={RouterLink} to={`/coins/${coin.id}`} pr="15px">
                    {coin.name}
                  </Link>
                </Td>
                <Td textAlign="end">
                  {coin.current_price >= 0.01
                    ? `$${coin.current_price.toLocaleString()}`
                    : `$${coin.current_price}`}
                </Td>
                <Td
                  color={
                    coin.price_change_percentage_24h > 0
                      ? 'green.500'
                      : 'red.500'
                  }
                  textAlign="end"
                >{`${coin.price_change_percentage_24h.toFixed(2)}%`}</Td>
                <Td
                  color={
                    coin.price_change_percentage_7d_in_currency > 0
                      ? 'green.500'
                      : 'red.500'
                  }
                  textAlign="end"
                >{`${coin.price_change_percentage_7d_in_currency.toFixed(
                  2,
                )}%`}</Td>
                <Td textAlign="end">{`$${coin.market_cap.toLocaleString()}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};
