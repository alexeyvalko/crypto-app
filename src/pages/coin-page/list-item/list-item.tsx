import { FC, Fragment } from 'react';

import { Badge, Separator } from '@/components/ui';
import { Price } from '@/components/ui/price';

import { CoinInfoType } from '../constants';

type ListItemProps = {
  label: string;
  value?: Array<number | string>;
  links?: Array<string>;
  type: CoinInfoType;
};

export const ListItem: FC<ListItemProps> = ({ label, value, links, type }) => {
  const linksToRender = links
    ?.filter((link) => !!link && typeof link === 'string')
    .map((link) => {
      const linkLabel = link.split('/')[2]?.replace('www.', '');

      return (
        <Badge key={link} variant="secondary">
          <a href={link} target="_blank" rel="noreferrer">
            {linkLabel}
          </a>
        </Badge>
      );
    });

  return (
    <>
      <div className="col-span-1 font-medium text-card-foreground">{label}</div>
      <div className="col-span-2 text-card-foreground text-right break-all">
        {value?.map((item, index, array) => (
          <Fragment key={item}>
            {type === CoinInfoType.PRICE && <Price price={item} />}
            {type === CoinInfoType.NUMBER && value?.toLocaleString()}
            {array.length - 1 !== index && ' - '}
          </Fragment>
        ))}
        {!!linksToRender?.length && (
          <div className="col-span-1 text-card-foreground text-right flex gap-2 justify-end flex-wrap">
            {linksToRender}
          </div>
        )}
      </div>
      <Separator className="col-span-3  last:hidden" />
    </>
  );
};
