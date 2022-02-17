import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { LoadingInfo } from './LoadingInfo';

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
      <Box ml="5" mb="5">
        <Heading as="h1" size="lg">
          {`${coin.name} (${coin.symbol.toUpperCase()})`}
        </Heading>
      </Box>
    </Box>
  );
};
