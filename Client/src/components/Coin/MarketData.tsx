import { Heading, Text, Tag, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Card } from '../Card/Card';

type Props = {
  coin: {
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
  };
};
export const MarketData: FC<Props> = ({
  coin: { market_cap, market_cap_change_24h, market_cap_change_percentage_24h },
}) => (
  <Card size="full">
    <Flex justify="flex-start" align="center" gap="5px">
      <Heading as="h2" fontSize={{ base: '1.2rem', md: '1.5rem' }} pb="5px">
        Market cap
      </Heading>
      <Tag
        colorScheme={market_cap_change_percentage_24h >= 0 ? 'green' : 'red'}
        variant="solid"
        size="md"
      >
        {market_cap_change_percentage_24h.toFixed(2)}%
      </Tag>
    </Flex>
    <Flex justify="space-between" wrap="wrap">
      <Text as="span" minWidth="max-content">
        Market cap:{' '}
      </Text>
      <Text as="span" fontWeight={500}>
        ${Number(market_cap.toFixed(0)).toLocaleString()}
      </Text>
    </Flex>
    <Flex justify="space-between" wrap="wrap">
      <Text as="span" minWidth="max-content">
        Market cap change 24h:{' '}
      </Text>
      <Text as="span" fontWeight={500}>
        ${Number(market_cap_change_24h.toFixed(0)).toLocaleString()}
      </Text>
    </Flex>
  </Card>
);
