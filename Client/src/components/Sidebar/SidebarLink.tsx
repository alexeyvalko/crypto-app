import { Link, useColorModeValue, Text, Flex, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

type Props = {
  path: string;
  name: string;
};

export const SidebarLink: FC<Props> = ({ path, name, children }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('gray.800', 'whiteAlpha.900');

  const link = {
    px: 3,
    py: 2,
    borderRadius: 'lg',
    display: 'inline-block',
    width: 'full',
    opacity: 0.85
  };

  const active = {
    color,
    bgColor: bg,
    opacity: 1
  };

  return (
    <Link
      as={RouterLink}
      to={path}
      _activeLink={active}
      sx={link}
      _hover={active}
    >
      <Flex justify="flex-start" gap="10px" align="center">
        <Center bgColor="teal.500" p="5px" borderRadius="full">
          {children}
        </Center>
        <Text as="span">{name}</Text>
      </Flex>
    </Link>
  );
};
