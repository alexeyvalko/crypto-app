import { FC } from 'react';
import { Box, CSSObject } from '@chakra-ui/react';

type Props = {
  toggleMenu(): void;
};

export const Overlay: FC<Props> = ({ toggleMenu }) => {
  const styles: CSSObject = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: '100',
    background: "rgba(0,0,0,0.4)",
    overflow:"",
  };
  return <Box sx={styles} onClick={toggleMenu} />;
};
