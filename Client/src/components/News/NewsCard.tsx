import { Box, Flex, Heading, Link, Spacer, Text, Tooltip } from '@chakra-ui/react';
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
      borderRadius="16px"
      minW="200px"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="full"
      minH={{ base: '300px', md: '200px' }}
      bgSize="cover"
      position="relative"
      background={ `url('${imgSrc}')`}
    >
      <Flex
        bg="linear-gradient(360deg, rgba(49, 56, 96, 0.2) 0%, rgba(21, 25, 40, 0.9) 100%)"
        w="100%"
        position="absolute"
        h="full"
        flexDirection="column"
        color="white"
        p="1.5rem 1.2rem 1.5rem 1.2rem"
        lineHeight="1.6"
      ><Tooltip label={title} borderRadius="md" >
        <Heading
          as="h3"
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="bold"
          pb=".3rem"
        >
          {title.length > 70 ? `${title.slice(0, 70)} ...` : title}
        </Heading>
        </Tooltip>
        <Text fontSize="sm" fontWeight="normal" w={{ lg: '92%' }}>
          {description.length > 70
            ? `${description.slice(0, 70)}...`
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
