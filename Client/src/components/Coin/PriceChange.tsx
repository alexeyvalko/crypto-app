// @flow
import { Heading, Flex, Box, Progress } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { getPriceChangePercentage } from '../../utils/getPriceChangePercentage';
import { Card } from '../Card/Card';

type Props = {
  coin: {
    low_24h: number;
    high_24h: number;
    current_price: number;
  };
};

export const PriceChange: FC<Props> = ({
  coin: { low_24h, high_24h, current_price },
}) => {
  const rangePercentage = useMemo(
    () => getPriceChangePercentage(low_24h, high_24h, current_price),
    [low_24h, high_24h, current_price],
  );
  return (
    <Card size="full">
      <Heading as="span" fontSize={{ base: '1.2rem', md: '1.5rem' }} pb="5px">
        Price change last 24 hours
      </Heading>
      <Flex justifyContent="space-between" fontWeight={500} pb="5px">
        <Box>{`$${low_24h}`}</Box>
        <Box>24h</Box>
        <Box>{`$${high_24h}`}</Box>
      </Flex>
      <Progress
        value={rangePercentage > 0 ? rangePercentage : 0}
        borderRadius="md"
        colorScheme="telegram"
      />
    </Card>
  );
};
