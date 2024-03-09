import { FC } from 'react';

type SparkLineProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const Sparkline: FC<SparkLineProps> = ({ src, alt, width = 135, height = 50 }) => {
  return (
    <div className={`w-full max-w-[${width}px]`}>
      <img src={src} alt={alt} width={width} height={height} className={`w-full max-w-[${width}px] h-auto`} />
    </div>
  );
};
