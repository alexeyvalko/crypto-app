import { FC } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '..';

type CoinImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export const CoinImage: FC<CoinImageProps> = ({ src, alt, className, width = 24, height = 24 }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} width={width} height={height} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};
