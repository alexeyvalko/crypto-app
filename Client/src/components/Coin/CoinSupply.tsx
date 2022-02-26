import { QuestionIcon } from '@chakra-ui/icons';
import { Heading, Text, Flex, Tooltip } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { CIRCULATING_SUPPLY, MAX_SUPPLY, TOTAL_SUPPLY } from '../../common/texts';
import { Card } from '../Card/Card';

type Props = {
  coin: {
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
  };
};


export const CoinSupply: FC<Props> = ({
  coin: { circulating_supply, total_supply, max_supply },
}) => (
    <Card size="full">
      <Flex justify="flex-start" align="center" gap="5px">
        <Heading as="h2" fontSize={{ base: '1.2rem', md: '1.5rem' }} pb="5px">
          Coin supply
        </Heading>
      </Flex>
      <Flex justify="space-between" wrap="wrap">
        <Text as="span" minWidth="max-content">
          Total supply{' '}
          <Tooltip label={TOTAL_SUPPLY} borderRadius="md" ><QuestionIcon w={3} h={3} opacity={0.5}/></Tooltip>
          
        </Text>
        <Text as="span" fontWeight={500}>
          {total_supply
            ? `${Number(total_supply.toFixed(0)).toLocaleString()}`
            : 'n/a'}
        </Text>
      </Flex>
      <Flex justify="space-between" wrap="wrap">
        <Text as="span" minWidth="max-content">
          Max supply{' '}
          <Tooltip label={MAX_SUPPLY} borderRadius="md" ><QuestionIcon w={3} h={3} opacity={0.5}/></Tooltip>
        </Text>
        <Text as="span" fontWeight={500}>
          {max_supply
            ? `${Number(max_supply.toFixed(0)).toLocaleString()}`
            : 'n/a'}
        </Text>
      </Flex>
      <Flex justify="space-between" wrap="wrap">
        <Text as="span" minWidth="max-content">
          Circulating supply{' '}
          <Tooltip label={CIRCULATING_SUPPLY} borderRadius="md" ><QuestionIcon w={3} h={3} opacity={0.5}/></Tooltip>
        </Text>
        <Text as="span" fontWeight={500}>
          {circulating_supply
            ? `${Number(circulating_supply.toFixed(0)).toLocaleString()}`
            : 'n/a'}
        </Text>
      </Flex>
    </Card>
  );
