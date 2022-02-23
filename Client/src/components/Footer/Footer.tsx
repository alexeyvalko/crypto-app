import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';

export const Footer: FC = () => (
  <Flex
    as="footer"
    w="full"
    justify={{ base: 'center', lg: 'flex-end' }}
    align="center"
    h="16"
    opacity={0.8}
    fontSize="14px"
  >
    <Box>
      Made by{' '}
      <Link href="https://github.com/alexeyvalko" color="blue.500" isExternal>
        Alexey Valko
      </Link>
    </Box>
  </Flex>
);
