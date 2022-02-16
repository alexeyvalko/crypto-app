import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { CoinTable } from "../CoinTable/CoinTable";

export const TopCoins: FC = () => (
    <Box paddingRight="10" paddingLeft="10" paddingBottom="10">
      <Box ml='5' mb='5'><Heading as='h1' size='lg'>Top 100</Heading></Box>
      <CoinTable items={10} title=' ' size="lg"/>
    </Box>
  );