import { Box, SimpleGrid, SkeletonText } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Card } from '../Card/Card';
import { HighlightCard } from './HighlightCard';

export const Highlights: FC = () => {
  const { loading, coinList, error } = useTypedUseSelector(
    (state) => state.coins,
  );
  const { fetchCoins } = useActions();

  useEffect(() => {
    fetchCoins()
  }, []);

  if (loading && coinList.length === 0) {
    return (
      <Box overflow="hidden" maxW="full">
        <SimpleGrid columns={[1, 1, 2, 4]} spacing="24px" w="full">
          <Card size="full">
            <SkeletonText mt="4" noOfLines={3} spacing="5" />
          </Card>
          <Card size="full">
            <SkeletonText mt="4" noOfLines={3} spacing="5" />
          </Card>
          <Card size="full">
            <SkeletonText mt="4" noOfLines={3} spacing="5" />
          </Card>
          <Card size="full">
            <SkeletonText mt="4" noOfLines={3} spacing="5" />
          </Card>
        </SimpleGrid>
      </Box>
    );
  }

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <Box overflow="hidden" maxW="full">
      <SimpleGrid columns={[1, 1, 2, 4]} spacing="24px" w="full">
        {coinList.map(
          ({ name, price_change_percentage_24h, current_price, image }) => (
            <Card size="full" key={name}>
              <HighlightCard
                price={current_price}
                coin={name}
                priceChange={price_change_percentage_24h}
                imageSrc={image}
              />
            </Card>
          ),
        )}
      </SimpleGrid>
    </Box>
  );
};
