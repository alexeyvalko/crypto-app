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
  Heading,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Card } from '../Card/Card';

type Props = {
  items: number;
  title: string;
  size: string
};

export const CoinTable: FC<Props> = ({ items, title, size }) => {
  const { coinList } = useTypedUseSelector((state) => state.coins);
  const { fetchCoinList } = useActions();
  const borderColor = useColorModeValue('gray.100', 'gray.600');

  const listToShow = coinList.slice(0, items);
  const hoverStyles = {
    bgColor: borderColor,
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <Card size="full">
      <Box ml="2" mb="2">
        <Heading as="h2" size="md">
          {title[0].toUpperCase() + title.slice(1)}
        </Heading>
      </Box>
      <Table variant="unstyled" size={size}>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
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
              <Td> {index + 1}</Td>
              <Td display="flex" alignItems="center">
                <Image
                  src={coin.image}
                  objectFit="contain"
                  boxSize="20px"
                  mr="10px"
                  alt={coin.name}
                />
                <Text as="span">{coin.name}</Text>
              </Td>
              <Td textAlign="end">{`$${coin.current_price}`}</Td>
              <Td
                color={
                  coin.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'
                }
                textAlign="end"
              >{`${coin.price_change_percentage_24h.toFixed(2)}%`}</Td>
              <Td
                color={
                  coin.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'
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
    </Card>
  );
};
