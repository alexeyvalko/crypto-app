import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Card } from '../Card/Card';

type Props = {
  chart: [number[]];
  name: string;
};

export const CoinChart: FC<Props> = ({ chart, name }) => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue('#1A202C', 'rgba(255,255,255,0.9)');
  
  const chartOptions: ApexOptions = {
    chart: {
      foreColor: color,
      height: 350,
      type: 'area',
      stacked: false,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: colorMode === 'light' ? '#CBD5E0' : '#4A5568',
      strokeDashArray: 4,

    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: colorMode,
  },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      colors: '#E53E3E',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      forceNiceScale: true,
    },
  };

  const chartData: [number, number][] = chart.map((data) => [data[0], data[4]]);

  const chartSeries: ApexAxisChartSeries = [
    {
      name: 'price',
      data: chartData,
    },
  ];

  return (
    <Card size="full">
      <Box ml="5">
        <Heading as="h2" fontSize={{ base: '1.2rem', md: '1.5rem' }} pb="5px">
          {`${name} to USD Chart`}
        </Heading>
      </Box>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={350}
      />
    </Card>
  );
};
