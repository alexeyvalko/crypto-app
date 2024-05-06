import { FC } from 'react';

import { Card, CardContent } from '@/components/ui';

import { ListItem } from '../list-item';

import { ListData } from '../types';

type ListProps<T extends ListData = ListData> = {
  data: T[];
  type: keyof T;
  className?: string;
};

export const List: FC<ListProps> = ({ data, type, className }) => {
  if (!data.length) {
    return null;
  }

  return (
    <Card className={className}>
      <CardContent className="grid grid-cols-3 justify-between gap-2 mt-8 width-full">
        {data.map((props) => !!props?.[type]?.length && <ListItem key={props.label} {...props} />)}
      </CardContent>
    </Card>
  );
};
