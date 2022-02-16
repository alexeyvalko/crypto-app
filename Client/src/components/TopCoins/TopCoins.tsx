import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { CoinTable } from "../CoinTable/CoinTable";

export const TopCoins: FC = () => (
    <Box paddingRight={{base: 5, md: 10}} paddingLeft={{base: 5, md: 10}} paddingBottom={{base: 5, md: 10}}>
      <Box ml='5' mb='5'><Heading as='h1' size='lg'>Top 100</Heading></Box>
      <CoinTable items={10} size="md" minCelWidth="60px"/>
    </Box>
  );