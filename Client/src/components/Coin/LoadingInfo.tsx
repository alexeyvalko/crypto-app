import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  info: string;
};

export const LoadingInfo: FC<Props> = ({ info }) => (
  <Box
    paddingRight={{ base: 5, md: 10 }}
    paddingLeft={{ base: 5, md: 10 }}
    paddingBottom={{ base: 5, md: 10 }}
  >
    <Box ml="5" mb="5">
      <Heading as="h1" size="lg">
        {info}
      </Heading>
    </Box>
  </Box>
);
