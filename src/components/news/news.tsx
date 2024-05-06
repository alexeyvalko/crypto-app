import { useQuery } from '@tanstack/react-query';

import { Section } from '../ui/section';

import { NewsCard } from './news-card';

import { getNews } from '@/api/news-api';

const COL_SIZES = [1, 1, 1];

export const News = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const newsArray = data?.data ?? [];

  const cols = COL_SIZES.map((size, index) => ({
    key: newsArray[index]?.uuid ?? index,
    colSize: size,
    news: newsArray[index] ?? {},
  }));

  if (!newsArray.length && !isLoading) {
    return null;
  }

  return (
    <Section title="📰 News" isLoading={isLoading}>
      <div className="grid md:grid-cols-3 gap-4">
        {cols.map(({ key, colSize, news }) => (
          <NewsCard key={key} className={`col-span-full md:col-span-${colSize}`} news={news} isLoading={isLoading} />
        ))}
      </div>
    </Section>
  );
};
