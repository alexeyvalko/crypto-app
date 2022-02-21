import { Box, Fade, Grid, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { Section } from '../Section/Section';
import { BaseCoinInfo } from './BaseCoinInfo';
import { DaysType } from './chartButtons';
import { CoinChart } from './CoinChart';
import { CoinSupply } from './CoinSupply';
import { LoadingInfo } from './LoadingInfo';
import { MarketData } from './MarketData';
import { PriceChange } from './PriceChange';

type PathParams = {
  coinId: string;
};



export const Coin = () => {
  const { coinList, loadingCoinList, error, chart, highlightCoins } = useTypedUseSelector(
    (state) => state.coins,
  );
  const { coinId } = useParams<PathParams>();
  const { fetchCoinList, fetchChartInfo, fetchHighlightCoins } = useActions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [days, setDays] = useState<DaysType>(1);

  useEffect(() => {
    if (coinList.length === 0) {
      fetchCoinList();
      fetchHighlightCoins();
    }
    if (coinId) {
      fetchChartInfo(coinId, days);
    }
    onOpen();
    return () => {
      onClose();
    };
  }, [days]);

  if (loadingCoinList) {
    return <LoadingInfo info="Loading..." />;
  }

  const coin = coinList.find((item) => item.id === coinId) || highlightCoins.find((item) => item.id === coinId);

  if (coin === undefined || error) {
    return <LoadingInfo info={error || 'Data Not found'} />;
  }

  return (
    <Fade in={isOpen}>
      <Box >
        <Grid
          templateColumns={{ base: '1fr', sm: 'max-content 1fr' }}
          gap="24px"
        >
          <BaseCoinInfo coin={coin} />
          <CoinSupply coin={coin} />
        </Grid>

        <Section>
          <Grid
            templateColumns={{
              base: '1fr',
              sm: '3fr minmax(max-content, 2fr)',
            }}
            gap="24px"
          >
            <PriceChange coin={coin} />
            <MarketData coin={coin} />
          </Grid>
        </Section>

        <Section>
          <CoinChart chart={chart} name={coin.name} days={days} setDays={setDays} />
        </Section>
      </Box>
    </Fade>
  );
};
