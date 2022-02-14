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
    path: '/about',
    name: 'About',
  },
];
