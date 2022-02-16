import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Card } from '../Card/Card';
import { Highlights } from '../Highlights/Highlights';

export const Dashboard: FC = () => (
  <Box paddingRight="10" paddingLeft="10">
    <Highlights />
    <Box mt="24px" mb="24px"><Card size="full">TEST</Card></Box>
  </Box>
);
