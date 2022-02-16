import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { CoinTable } from '../CoinTable/CoinTable';
import { Highlights } from '../Highlights/Highlights';

export const Dashboard: FC = () => (
  <Box paddingRight="10" paddingLeft="10" paddingBottom="10">
    <Highlights />
    <Box mt="24px" mb="24px"><CoinTable items={10} title='top 10'size='sm'/></Box>
  </Box>
);
