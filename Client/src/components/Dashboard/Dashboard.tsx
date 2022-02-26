import { Box, Fade, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { CoinTable } from '../CoinTable/CoinTable';
import { Highlights } from '../Highlights/Highlights';
import { News } from '../News/News';
import { Section } from '../Section/Section';
import { HeadTitle } from './HeadTitle';

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
        <HeadTitle>Trending</HeadTitle>
        <Highlights />
        <Section>
          <HeadTitle>News</HeadTitle>
          <News />
        </Section>
        <Section>
          <HeadTitle>Top 10</HeadTitle>
          <CoinTable items={10} size="sm" minCelWidth="25px" page={0} />
        </Section>
      </Box>
    </Fade>
  );
};
