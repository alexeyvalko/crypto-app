interface IRoutes {
  path: string;
  name: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    name: 'Dashboard',
  },
  {
    path: '/top',
    name: 'Top 100',
  },
  {
    path: '/about',
    name: 'About',
  },
];
