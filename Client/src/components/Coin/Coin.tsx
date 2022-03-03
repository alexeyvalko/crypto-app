import {
  Box,
  Center,
  Fade,
  Grid,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
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
  const { loadingCoin, error, chart, coin } = useTypedUseSelector(
    (state) => state.coins,
  );
  const { coinId } = useParams<PathParams>();
  const { fetchChartInfo, fetchCoin } = useActions();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [days, setDays] = useState<DaysType>(1);

  useEffect(() => {
    if (coinId) {
      fetchCoin(coinId);
    }
    onOpen();
    return () => {
      onClose();
    };
  }, [coinId]);

  useEffect(() => {
    if (coinId) {
      fetchChartInfo(coinId, days);
    }
  }, [days, coinId]);

  if (loadingCoin) {
    return (
      <Center h="calc(100vh - 138px)" w="100%">
        <Spinner size="xl" color="blue.600" />
      </Center>
    );
  }

  const coinData = coin;

  if (!coinData || error) {
    return (
      <Center h="calc(100vh - 138px)" w="100%">
        <LoadingInfo info={error || 'Data Not found'} />
      </Center>
    );
  }

  return (
    <Fade in={isOpen}>
      <Box>
        <Grid
          templateColumns={{ base: '1fr', sm: 'max-content 1fr' }}
          gap="24px"
        >
          <BaseCoinInfo coin={coinData} />
          <CoinSupply coin={coinData} />
        </Grid>

        <Section>
          <Grid
            templateColumns={{
              base: '1fr',
              sm: '3fr minmax(max-content, 2fr)',
            }}
            gap="24px"
          >
            <PriceChange coin={coinData} />
            <MarketData coin={coinData} />
          </Grid>
        </Section>

        <Section>
          <CoinChart
            chart={chart}
            name={coinData.name}
            days={days}
            setDays={setDays}
          />
        </Section>
      </Box>
    </Fade>
  );
};
