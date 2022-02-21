import { Box, SimpleGrid } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { HighlightCard } from './HighlightCard';
import { HighlightCardSkeleton } from './HighlightCardSkeleton';

export const Highlights: FC = () => {
  const { loadingHighlight, highlightCoins, error } = useTypedUseSelector(
    (state) => state.coins,
  );
  const { fetchHighlightCoins } = useActions();

  useEffect(() => {
    fetchHighlightCoins();
  }, []);

  if (loadingHighlight && highlightCoins.length === 0) {
    return <HighlightCardSkeleton />;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <Box overflow="hidden" maxW="full">
      <SimpleGrid
        columns={[2, 2, 2, 4]}
        spacing={{ base: '15px', md: '24px' }}
        w="full"
      >
        {highlightCoins.map(
          ({ name, price_change_percentage_24h, current_price, image }) => (
            <HighlightCard
              key={name}
              price={current_price}
              coin={name}
              priceChange={price_change_percentage_24h}
              imageSrc={image}
            />
          ),
        )}
      </SimpleGrid>
    </Box>
  );
};
