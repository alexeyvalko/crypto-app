import { Box } from "@chakra-ui/react";
import { FC } from "react";


export const Section: FC = ({children}) => (
    <Box as="section" mt="24px" mb="24px">
      {children}
    </Box>
  );
