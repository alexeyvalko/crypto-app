import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  size: string | number;
};

export const Card: FC<Props> = ({ size, children }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');

  const style = {
    width: { base: 'full', sm: size },
    bgColor: bg,
    borderRadius: '15px',
    padding: { base: '18px', md: '22px' },
    fontSize: { base: 'sm', md: 'md' },
  };

  return <Box sx={style}>{children}</Box>;
};
