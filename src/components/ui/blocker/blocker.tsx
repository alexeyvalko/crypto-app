import { FC } from 'react';

import { Loader } from '../loader';

type BlockerProps = {
  isLoading: boolean;
};

export const Blocker: FC<BlockerProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="bg-current opacity-20  z-10 flex items-center justify-center w-full h-full absolute top-0 right-0 rounded-md">
      <Loader size={48} />
    </div>
  );
};
