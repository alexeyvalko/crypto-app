import { ApexOptions } from "apexcharts";

export const getChartOptions  = (color: string, colorMode: string): ApexOptions => ({
    chart: {
      foreColor: color,
      height: 350,
      type: 'area',
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
      labels: {
        minWidth: 0,
        maxWidth: 80,
      },
    },
  });