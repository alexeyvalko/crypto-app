import { Skeleton, Stack } from "@chakra-ui/react";
import { Card } from "../Card/Card";

export const TableSkeleton = () => (
    <Card size="full">
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Card>
  );
