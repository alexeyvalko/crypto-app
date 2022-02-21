import { FC } from 'react';

type Props = {
  className: string;
  height: string;
  width: string;
  stroke: string;
  fill: string;
  strokeWidth: string;
};

export const MdInfo: FC<Partial<Props>> = ({
  className,
  width,
  height,
  strokeWidth,
  stroke,
  fill,
}) => (
  <svg
    className={className}
    stroke={stroke || 'currentColor'}
    fill={fill || 'currentColor'}
    strokeWidth={strokeWidth || '0'}
    height={height || '1em'}
    width={width || '1em'}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);
