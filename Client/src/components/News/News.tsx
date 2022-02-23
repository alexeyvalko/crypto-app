import { Grid, GridItem } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedUseSelector } from '../../hooks/useTypedUseSelector';
import { NewsCard } from './NewsCard';

export const News: FC = () => {
  const { fetchNews } = useActions();
  const { news } = useTypedUseSelector((state) => state.news);
  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  }, []);

  const newsToShow = news.slice(0, 3);
  return (
    <Grid
      minH="400px"
      templateRows={{ base: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }}
      templateColumns={{ base: '1fr', md: 'repeat(7, 1fr)' }}
      gap="24px"
      w="full"
    >
      {newsToShow.map(
        ({ title, image_url, url, description, uuid, published_at }, index) => (
          <GridItem
            rowSpan={{ base: 1, md: index === 0 ? 2 : 1 }}
            colSpan={{ base: 1, md: index === 0 ? 4 : 3 }}
            key={uuid}
          >
            <NewsCard
              published_at={published_at}
              title={title}
              imgSrc={image_url}
              url={url}
              description={description}
            />
          </GridItem>
        ),
      )}
    </Grid>
  );
};
