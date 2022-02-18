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
import { Card } from '../Card/Card';

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
  <Card size="full">
    <Flex justifyContent="space-between" align="center">
      <Stat width="85%">
        <StatLabel>{coin}</StatLabel>
        <StatNumber fontSize={{base: "1rem", md: "1.5rem"}}>{`$${price.toLocaleString()}`}</StatNumber>
        <StatHelpText>
          <StatArrow
            type={priceChange > 0 ? 'increase' : 'decrease'}
            color={priceChange > 0 ? 'green' : 'red'}
          />
          {`${priceChange.toFixed(2)}%`}
        </StatHelpText>
      </Stat>

      <Box width="15%">
        <Image src={imageSrc} objectFit="cover" boxSize="100%" alt={coin} borderRadius="50%" />
      </Box>
    </Flex>
  </Card>
);
