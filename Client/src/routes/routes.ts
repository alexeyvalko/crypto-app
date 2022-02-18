import { MdSpaceDashboard, MdTableChart, MdInfo } from 'react-icons/md';

interface IRoutes {
  path: string;
  name: string;
  icon: React.FunctionComponent;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: MdSpaceDashboard,
  },
  {
    path: '/top',
    name: 'Top 100',
    icon: MdTableChart,
  },
  {
    path: '/about',
    name: 'About',
    icon: MdInfo,
  },
];
