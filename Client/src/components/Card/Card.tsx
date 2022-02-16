import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  size: string | number;
};

export const Card: FC<Props> = ({ size, children }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');

  const style = {
    width: size,
    bgColor: bg,
    borderRadius: '15px',
    padding: {base: '20px', md:"22px"},
  };

  return <Box sx={style}>{children}</Box>;
};
