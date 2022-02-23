import { Box, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import moment from 'moment';

type Props = {
  title: string;
  imgSrc: string;
  url: string;
  description: string;
  published_at: string;
};

export const NewsCard: FC<Props> = ({
  title,
  imgSrc,
  url,
  description,
  published_at,
}) => (
  <Box
    overflow="hidden"
    minW="200px"
    backgroundImage={imgSrc}
    bgPosition="center"
    bgRepeat="no-repeat"
    w="100%"
    h="full"
    minH={{ base: '300px', md: '200px' }}
    bgSize="cover"
    position="relative"
    borderRadius="15px"
  >
    <Flex
      bg="linear-gradient(360deg, rgba(49, 56, 96, 0.2) 0%, rgba(21, 25, 40, 0.9) 100%)"
      w="100%"
      position="absolute"
      h="full"
      borderRadius="inherit"
      flexDirection="column"
      color="white"
      p="1.5rem 1.2rem 1.5rem 1.2rem"
      lineHeight="1.6"
    >
      <Heading
        as="h3"
        fontSize={{ base: 'md', md: 'xl' }}
        fontWeight="bold"
        pb=".3rem"
      >
        {title.length > 100 ? `${title.slice(0, 80)} ...` : title}
      </Heading>
      <Text fontSize="sm" fontWeight="normal" w={{ lg: '92%' }}>
        {description.length > 100
          ? `${description.slice(0, 110)}...`
          : description}
      </Text>
      <Spacer />
      <Flex align="center" justifyContent="space-between" w="full">
        <Box>
          <Link href={url} p="0px" isExternal>
            <Text
              as="span"
              fontSize="sm"
              fontWeight="bold"
              _hover={{ me: '4px' }}
              transition="all .5s ease"
            >
              Read more
            </Text>
            <ArrowForwardIcon
              w="20px"
              h="20px"
              fontSize="xl"
              transition="all .5s ease"
              mx=".3rem"
              cursor="pointer"
              _hover={{ transform: 'translateX(20%)' }}
              pt="4px"
            />
          </Link>
        </Box>
        <Text as="span" fontSize="sm">
          {moment(published_at).startOf('seconds').fromNow()}
        </Text>
      </Flex>
    </Flex>
  </Box>
);
