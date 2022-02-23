import { ApexOptions } from 'apexcharts';
import {
  Button,
  Flex,
  Heading,
  Skeleton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC, Suspense, lazy } from 'react';
import { Card } from '../Card/Card';
import { getChartOptions } from '../../utils/getChartOptions';
import { chartButtons, DaysType } from './chartButtons';

type Props = {
  chart: [number[]];
  name: string;
  days: number | string;
  setDays(value: DaysType): void;
};

const Chart = lazy(() => import('react-apexcharts'));

export const CoinChart: FC<Props> = ({ chart, name, days, setDays }) => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue('#1A202C', 'rgba(255,255,255,0.9)');
  const buttonsBg = useColorModeValue('gray.300', 'gray.600');
  const chartOptions: ApexOptions = getChartOptions(color, colorMode);
  const chartData: [number, number][] = chart.map((data) => [data[0], data[4]]);

  const chartSeries: ApexAxisChartSeries = [
    {
      name: 'price',
      data: chartData,
    },
  ];

  return (
    <Card size="full">
      <Flex
        justify={{ base: 'center', sm: 'space-between' }}
        wrap="wrap"
        gap="10px"
        align="center"
      >
        <Heading as="h2" fontSize={{ base: '1.2rem', md: '1.5rem' }}>
          {`${name} to USD Chart`}
        </Heading>
        <Flex
          justify="space-between"
          align="center"
          padding="5px"
          gap={{ base: '2px', sm: '5px' }}
          bgColor={buttonsBg}
          borderRadius="10px"
        >
          {chartButtons.map((item) => (
            <Button
              key={item.name}
              variant={days === item.value ? 'solid' : 'ghost'}
              pl="10px"
              pr="10px"
              size="sm"
              fontSize={{ base: '12px', sm: '14px' }}
              onClick={() => {
                setDays(item.value);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Suspense fallback={<Skeleton height="100px" />}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={350}
        />
      </Suspense>
    </Card>
  );
};
