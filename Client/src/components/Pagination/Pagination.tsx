import { Box, Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  pages: number[];
  currentPage: number;
  onClick(page: number): void;
};

export const Pagination: FC<Props> = ({ pages, currentPage, onClick }) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  return (
    <Flex w="full" justify="center" wrap="wrap" gap="10px" mt="5">
      {currentPage >= 3 && (
        <Flex gap="10px">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onClick(1);
            }}
          >
            1
          </Button>
          {currentPage >= 4 && <Box>...</Box>}
        </Flex>
      )}
      {pages
        .filter((item) => {
          if (item === currentPage || item === prevPage || item === nextPage) {
            return true;
          }
          return false;
        })
        .map((item) => (
          <Button
            variant={currentPage === item ? 'solid' : 'outline'}
            key={item}
            size="sm"
            onClick={() => {
              onClick(item);
            }}
          >
            {item}
          </Button>
        ))}
      {currentPage <= pages.length - 2 && (
        <Flex gap="10px">
          {currentPage <= pages.length - 3 && <Box>...</Box>}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onClick(pages.length);
            }}
          >
            {pages.length}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
