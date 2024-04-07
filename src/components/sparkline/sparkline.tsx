import { FC } from 'react';

type SparkLineProps = {
  src: string;
  alt: string;
};

export const Sparkline: FC<SparkLineProps> = ({ src, alt }) => {
  return (
    <div className="w-full max-w-[135px]">
      <img src={src} alt={alt} width={135} height={50} className="w-full max-w-[135px] h-auto" />
    </div>
  );
};
