import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { CoinTable } from '../CoinTable/CoinTable';
import { getPagesCount } from '../../utils/getPagesCount';

export const TopCoins: FC = () => {
  const { coinList } = useTypedUseSelector((state) => state.coins);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pages = useMemo(
    () =>
      Array(getPagesCount(coinList.length, 10))
        .fill(0)
        .map((_, index) => index + 1),
    [coinList.length],
  );

  return (
    <Box
      paddingRight={{ base: 5, md: 10 }}
      paddingLeft={{ base: 5, md: 10 }}
      paddingBottom={{ base: 5, md: 10 }}
    >
      <Box ml="5" mb="5">
        <Heading as="h1" size="lg">
          Top 100 coins on market
        </Heading>
      </Box>
      <CoinTable items={10} page={currentPage - 1} size="md" minCelWidth="60px" />

      <Flex w="full" justify="center" wrap="wrap" gap="10px" mt="5">
        {pages.map((item ) => (
          <Button
            variant={currentPage === item ? 'solid' : 'outline'}
            key={item}
            size="md"
            onClick={() => {
              setCurrentPage(item);
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
