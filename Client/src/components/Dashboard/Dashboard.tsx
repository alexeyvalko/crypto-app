import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { CoinTable } from '../CoinTable/CoinTable';
import { Highlights } from '../Highlights/Highlights';

export const Dashboard: FC = () => (
  <Box paddingRight={{base: 5, md: 10}} paddingLeft={{base: 5, md: 10}} paddingBottom={{base: 5, md: 10}}>
    <Highlights />
    <Box mt="24px" mb="24px">
      <Box ml="3" mb="3">
        <Heading as="h2" size="md">
          Top 10
        </Heading>
      </Box>
      <CoinTable items={10} size="sm" minCelWidth="25px" page={0} />
    </Box>
  </Box>
);
