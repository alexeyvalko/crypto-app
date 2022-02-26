import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

export const NewsSkeleton = () => (
  <Grid
    minH="500px"
    templateRows={{ base: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }}
    templateColumns={{ base: '1fr', md: 'repeat(7, 1fr)' }}
    gap="24px"
    w="full"
  >
    <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={{ base: 1, md: 4 }}>
      <Skeleton height="100%" borderRadius="15px" />
    </GridItem>
    <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 1, md: 3 }}>
      <Skeleton height="100%" borderRadius="15px" />
    </GridItem>
    <GridItem rowSpan={{ base: 1, md: 1 }} colSpan={{ base: 1, md: 3 }}>
      <Skeleton height="100%" borderRadius="15px" />
    </GridItem>
  </Grid>
);
