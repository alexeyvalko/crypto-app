import { Link, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

type Props = {
  path: string;
  name: string;
};

export const SidebarLink: FC<Props> = ({ path, name }) => {

  const bg = useColorModeValue('gray.200', 'gray.700')
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')

  const link = {
    px: 3,
    py: 2,
    borderRadius: 'md',
    display: 'inline-block',
    width: 'full',
  };

  const active = {
    color,
    bgColor: bg,
  };



  return (
    <Link as={RouterLink} to={path} _activeLink={active} sx={link}>
      {name}
    </Link>
  );
};
