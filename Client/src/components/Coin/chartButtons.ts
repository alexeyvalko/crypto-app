export type DaysType = 1 | 7 | 30 | 90 | 180 | 365 | 'max';
export type ButtonsType = '1D' | '7D' | '1M' | '3M' | '6M' | '1Y' | 'All';

interface IChartButtons {
  name: ButtonsType;
  value: DaysType;
}

export const chartButtons: IChartButtons[] = [
  {
    name: '1D',
    value: 1,
  },
  {
    name: '7D',
    value: 7,
  },
  {
    name: '1M',
    value: 30,
  },
  {
    name: '3M',
    value: 90,
  },
  {
    name: '6M',
    value: 180,
  },
  {
    name: '1Y',
    value: 365,
  },
  {
    name: 'All',
    value: 'max',
  },
];
