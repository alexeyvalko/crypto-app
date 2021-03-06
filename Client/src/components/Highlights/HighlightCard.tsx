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
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Card } from '../Card/Card';

type Props = {
  coin: string;
  price: string | number;
  priceChange: number;
  imageSrc: string;
  id: string;
};

export const HighlightCard: FC<Props> = ({
  coin,
  price,
  priceChange,
  imageSrc,
  id,
}) => (
  <LinkBox>
    <Card size="full">
      <Flex justifyContent="space-between" align="center">
        <Stat width="85%">
          <StatLabel
            fontWeight={{ base: '500', sm: '700' }}
            opacity={{ base: 0.8 }}
          >
            <LinkOverlay as={RouterLink} to={`/coins/${id}`}>
              {coin}
            </LinkOverlay>
          </StatLabel>
          <StatNumber
            fontWeight={{ base: '700', sm: '700' }}
            fontSize={{ base: '1.1rem', md: '1.6rem' }}
          >{new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 6,
          }).format(+price)}</StatNumber>
          <StatHelpText mb="0">
            <StatArrow
              type={priceChange > 0 ? 'increase' : 'decrease'}
              color={priceChange > 0 ? 'green' : 'red'}
            />
            {`${priceChange.toFixed(2)}%`}
          </StatHelpText>
        </Stat>

        <Box
          width={{ base: '0%', sm: '15%' }}
          display={{ base: 'none', sm: 'inline-block' }}
        >
          <Image
            src={imageSrc}
            objectFit="contain"
            boxSize="100%"
            alt={coin}
            borderRadius="50%"
          />
        </Box>
      </Flex>
    </Card>
  </LinkBox>
);
