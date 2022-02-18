import { Box, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Section } from '../Section/Section';
import { BaseCoinInfo } from './BaseCoinInfo';
import { CoinSupply } from './CoinSupply';
import { LoadingInfo } from './LoadingInfo';
import { MarketData } from './MarketData';
import { PriceChange } from './PriceChange';

type PathParams = {
  coinId: string;
};

export const Coin = () => {
  const { coinList, loadingCoinList, error } = useTypedUseSelector(
    (state) => state.coins,
  );
  const { coinId } = useParams<PathParams>();
  const { fetchCoinList } = useActions();

  useEffect(() => {
    if (coinList.length === 0) {
      fetchCoinList();
    }
  }, []);

  if (loadingCoinList) {
    return <LoadingInfo info="Loading..." />;
  }

  const coin = coinList.find((item) => item.id === coinId);

  if (coin === undefined || error) {
    return <LoadingInfo info={error || 'Data Not found'} />;
  }

  return (
    <Box
      paddingRight={{ base: 5, md: 10 }}
      paddingLeft={{ base: 5, md: 10 }}
      paddingBottom={{ base: 5, md: 10 }}
    >
      <Grid templateColumns={{ base: '1fr', sm: 'max-content 1fr' }} gap="24px">
      <BaseCoinInfo coin={coin} />
      <CoinSupply coin={coin} />
      </Grid>

      <Section>
        <Grid templateColumns={{ base: '1fr', sm: '3fr minmax(max-content, 2fr)' }} gap="24px">
          <PriceChange coin={coin} />
          <MarketData coin={coin} />
        </Grid>
      </Section>
    </Box>
  );
};
