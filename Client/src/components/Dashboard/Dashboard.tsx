import { Box, Fade, Heading, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { CoinTable } from '../CoinTable/CoinTable';
import { Highlights } from '../Highlights/Highlights';
import { News } from '../News/News';
import { Section } from '../Section/Section';

export const Dashboard: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
    return () => {
      onToggle();
    };
  }, []);

  return (
    <Fade in={isOpen}>
      <Box>
        <Highlights />
        <Section>
          <Box ml="3" mb="3">
            <Heading as="h2" size="lg">
              News
            </Heading>
          </Box>
          <News />
        </Section>
        <Section>
          <Box ml="3" mb="3">
            <Heading as="h2" size="lg">
              Top 10
            </Heading>
          </Box>
          <CoinTable items={10} size="sm" minCelWidth="25px" page={0} />
        </Section>
      </Box>
    </Fade>
  );
};
