import { Box, Fade, Heading, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect, useMemo, useState } from 'react';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { CoinTable } from '../CoinTable/CoinTable';
import { getPagesCount } from '../../utils/getPagesCount';
import { Pagination } from './Pagination';

export const TopCoins: FC = () => {
  const { coinList } = useTypedUseSelector((state) => state.coins);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isOpen, onToggle } = useDisclosure();

  const pages = useMemo(
    () =>
      Array(getPagesCount(coinList.length, 10))
        .fill(0)
        .map((_, index) => index + 1),
    [coinList.length],
  );

  useEffect(() => {
    onToggle();
    return () => {
      onToggle();
    };
  }, []);

  return (
    <Fade in={isOpen}>
      <Box>
        <Box ml="5" mb="5">
          <Heading as="h1" size="lg">
            Top 100 coins on market
          </Heading>
        </Box>
        <CoinTable
          items={10}
          page={currentPage - 1}
          size="md"
          minCelWidth="60px"
        />

        <Pagination
          pages={pages}
          currentPage={currentPage}
          onClick={(page: number) => {
            setCurrentPage(page);
          }}
        />
      </Box>
    </Fade>
  );
};
