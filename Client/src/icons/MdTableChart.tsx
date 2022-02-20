import { FC } from 'react';

type Props = {
  className: string;
  height: string;
  width: string;
  stroke: string;
  fill: string;
  strokeWidth: string;
};

export const MdTableChart: FC<Partial<Props>> = ({
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
    <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z" />
  </svg>
);
