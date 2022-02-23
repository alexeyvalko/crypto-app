import { Box, SimpleGrid, SkeletonText } from '@chakra-ui/react';
import { Card } from '../Card/Card';

export const HighlightCardSkeleton = () => (
  <Box overflow="hidden" maxW="full">
    <SimpleGrid columns={[2, 2, 2, 4]} spacing="24px" w="full">
      <Card size="full">
        <SkeletonText mt="4" noOfLines={3} spacing="5" />
      </Card>
      <Card size="full">
        <SkeletonText mt="4" noOfLines={3} spacing="5" />
      </Card>
      <Card size="full">
        <SkeletonText mt="4" noOfLines={3} spacing="5" />
      </Card>
      <Card size="full">
        <SkeletonText mt="4" noOfLines={3} spacing="5" />
      </Card>
    </SimpleGrid>
  </Box>
);
