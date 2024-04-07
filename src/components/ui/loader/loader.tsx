import { cn } from '@/utils';

import styles from './loader.module.css';

export const Loader: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
  return <span className={cn(styles.loader, className)} style={{ width: size, height: size }}></span>;
};
