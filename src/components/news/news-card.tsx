import { FC } from 'react';
import dayjs from 'dayjs';

import { cn } from '@/utils';

import { Card, CardFooter, CardTitle, Skeleton } from '../ui';

import styles from './news.module.css';

import { NewsType } from '@/types/news';

type NewsCardProps = {
  news: NewsType;
  isLoading?: boolean;
  className?: string;
};

export const NewsCard: FC<NewsCardProps> = ({ className, news, isLoading }) => {
  const { image_url, title, published_at, url } = news;

  if (isLoading) {
    return (
      <Card className={cn(className, 'aspect-[16/10] overflow-hidden')}>
        <Skeleton className="w-full h-full" />
      </Card>
    );
  }

  return (
    <Card
      className={cn(className, 'bg-cover bg-center relative aspect-[16/10] overflow-hidden')}
      style={{
        backgroundImage: `url('${image_url}')`,
      }}
    >
      <div className={cn(styles.cardContainer, 'p-4 flex flex-col justify-between')}>
        {title && <CardTitle className="text-zinc-100 line-clamp-3 pb-1">{title}</CardTitle>}
        <CardFooter className="p-0 text-zinc-100 flex justify-between">
          {!!url && (
            <a href={url} target="_blank" rel="noreferrer" className="underline">
              Read more
            </a>
          )}
          {!!published_at && dayjs(published_at).fromNow()}
        </CardFooter>
      </div>
    </Card>
  );
};
