import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Highlights } from '../Highlights/Highlights';

export const Dashboard: FC = () => (
    <Box paddingRight="10" paddingLeft="10">
      <Highlights />
    </Box>
  );
