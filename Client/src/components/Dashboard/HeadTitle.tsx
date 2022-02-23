import { Box, Heading } from '@chakra-ui/react';
import { memo, ReactChild } from 'react';

type Props = {
  children: ReactChild
}

export const HeadTitle = memo((props: Props) => (
  <Box ml="3" mb="3">
    <Heading as="h2" size="lg">
      {props.children}
    </Heading>
  </Box>
));
