import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Card } from '../Card/Card';

type Props = {
  items: number;
  size: string;
  minCelWidth: string;
};

export const CoinTable: FC<Props> = ({ items, size, minCelWidth }) => {
  const { coinList } = useTypedUseSelector((state) => state.coins);
  const { fetchCoinList } = useActions();
  const borderColor = useColorModeValue('gray.100', 'gray.600');
  const bg = useColorModeValue('gray.200', 'gray.700');

  const listToShow = coinList.slice(0, items);
  const hoverStyles = {
    bgColor: borderColor,
  };

  const overflowMode = size === 'sm' ? 'visible' : 'scroll';
  const backgroundMode = size === 'sm' ? 'transparent' : bg;
  const sticky = (width: string) => ({
    position: 'sticky',
    zIndex: 2,
    background: {base: bg, lg:backgroundMode, xl:"transparent"},
    minWidth: minCelWidth,
    top: 0,
    left: width,
  });

  useEffect(() => {
    fetchCoinList();
  }, []);
  return (
    <Card size="full">
      <Box overflowX={{base: "scroll", lg: overflowMode, xl: "visible"}}>
        <Table variant="unstyled" size={size}>
          <Thead>
            <Tr>
              <Th sx={sticky('0')}>#</Th>
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
                <Td sx={sticky('0')}> {index + 1}</Td>
                <Td display="flex" alignItems="center" sx={sticky(minCelWidth)}>
                  <Image
                    src={coin.image}
                    objectFit="contain"
                    boxSize="20px"
                    mr="10px"
                    alt={coin.name}
                  />
                  <Text as="span" pr="10px">
                    {coin.name}
                  </Text>
                </Td>
                <Td textAlign="end">{`$${coin.current_price}`}</Td>
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
                    coin.price_change_percentage_24h > 0
                      ? 'green.500'
                      : 'red.500'
                  }
                  textAlign="end"
                >{`${coin.price_change_percentage_7d_in_currency.toFixed(
                  2,
                )}%`}</Td>
                <Td textAlign="end">{`$${coin.market_cap}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};
