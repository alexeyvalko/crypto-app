import { Flex, Image, Heading, Box, Tag, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Card } from '../Card/Card';

type Props = {
  coin: {
    image: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    current_price: number;
    price_change_percentage_24h: number;
  };
};

export const BaseCoinInfo: FC<Props> = ({
  coin: {
    image,
    name,
    symbol,
    market_cap_rank,
    current_price,
    price_change_percentage_24h,
  },
}) => (
  <Card size="full">
    <Flex justify="flex-start" gap="10px" align="center" mb="2">
      <Image src={image} boxSize={8} borderRadius="full" alt={name} />
      <Heading as="h1" size="lg">
        {`${name} (${symbol.toUpperCase()})`}
      </Heading>
    </Flex>
    <Box>
      <Tag colorScheme="telegram" variant="solid">{`Rank #${
        market_cap_rank || 'n/a'
      }`}</Tag>
    </Box>
    <Box width="100%">
      <Flex gap="10px" align="center" wrap="wrap">
        <Text
          as="span"
          fontSize={{ base: '1.8rem', md: '2rem' }}
          fontWeight="700"
        >
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 4,
          }).format(current_price)}
        </Text>
        <Tag
          colorScheme={price_change_percentage_24h >= 0 ? 'green' : 'red'}
          variant="solid"
          size="md"
        >{price_change_percentage_24h && `${price_change_percentage_24h.toFixed(2)}%`}</Tag>
      </Flex>
    </Box>
  </Card>
);
