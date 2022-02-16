import { FC } from 'react';
import {
  Image,
  Box,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

type Props = {
  coin: string;
  price: string | number;
  priceChange: number;
  imageSrc: string;
};

export const HighlightCard: FC<Props> = ({
  coin,
  price,
  priceChange,
  imageSrc,
}) => (
  <Flex justifyContent="space-between" align="center">
    <Stat width="80%">
      <StatLabel>{coin}</StatLabel>
      <StatNumber>{`$${price}`}</StatNumber>
      <StatHelpText>
        <StatArrow
          type={priceChange > 0 ? 'increase' : 'decrease'}
          color={priceChange > 0 ? 'green' : 'red'}
        />
        {`${priceChange.toFixed(2)}%`}
      </StatHelpText>
    </Stat>

    <Box width="20%">
      <Image src={imageSrc} objectFit="cover" boxSize="100%" alt={coin} />
    </Box>
  </Flex>
);
