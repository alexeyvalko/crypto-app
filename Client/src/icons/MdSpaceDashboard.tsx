import { FC } from 'react';

type Props = {
  className: string;
  height: string;
  width: string;
  stroke: string;
  fill: string;
  strokeWidth: string;
};

export const MdSpaceDashboard: FC<Partial<Props>> = ({
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
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
  </svg>
);
