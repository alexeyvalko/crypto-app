import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  path: string;
  name: string;
};

export const SidebarLink: FC<Props> = ({ path, name }) => {
  const activeClassName = 'link active';
  const normalClassName = 'link';

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? activeClassName : normalClassName
      }
    >
      {name}
    </NavLink>
  );
};
