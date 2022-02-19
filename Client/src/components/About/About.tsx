import { Box, Fade, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { Card } from '../Card/Card';

export const About: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
    return () => {
      onToggle();
    };
  }, []);

  return (
    <Fade in={isOpen}>
      <Box paddingRight="10" paddingLeft="10">
        <Card size="full">about page</Card>
      </Box>
    </Fade>
  );
};
