import {
  Box,
  Fade,
  Heading,
  Link,
  ListItem,
  OrderedList,
  useDisclosure,
} from '@chakra-ui/react';
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
      <Box
        paddingRight={{ base: 5, md: 10 }}
        paddingLeft={{ base: 5, md: 10 }}
        paddingBottom={{ base: 5, md: 5 }}
      >
        <Card size="full">
          <Heading as="h2" fontSize="24px" pb="10px">
            Used resources
          </Heading>
          <OrderedList>
            <ListItem>
              <Link
                href="https://www.chakra-ui.com/"
                isExternal
                color="blue.500"
              >
                Chakra UI
              </Link>{' '}
              - Open source ReactJS framework
            </ListItem>
            <ListItem>
              <Link href="https://apexcharts.com/" isExternal color="blue.500">
                ApexCharts.js
              </Link>{' '}
              - Modern & Interactive Open-source charts
            </ListItem>
            <ListItem>
              <Link href="https://reactjs.org/" isExternal color="blue.500">
                ReactJS
              </Link>{' '}
              - A popular JavaScript library for building user interfaces
            </ListItem>
            <ListItem>
              <Link
                href="https://www.coingecko.com/en/api/documentation"
                isExternal
                color="blue.500"
              >
                Coingecko API
              </Link>{' '}
              - The largest source of cryptocurrency data.
            </ListItem>
          </OrderedList>
        </Card>
      </Box>
    </Fade>
  );
};
