import { ApexOptions } from 'apexcharts';
import millify from 'millify';

export const getChartOptions = (
  color: string,
  colorMode: string,
): ApexOptions => ({
  chart: {
    foreColor: color,
    height: 350,
    type: 'area',
    dropShadow: {
      enabled: true,
      color,
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06,
    },
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
    padding: {
      left: -45,
      right: -5,
    },
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
    custom({ series, seriesIndex, dataPointIndex }) {
      return `<div style="display: flex; gap: 5px; font-weight: 600; padding: 10px; border-radius: 15px; box-shadow: none;">
        <span>${
          new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 4,
          }).format(series[seriesIndex][dataPointIndex])
          
        }</span>
        </div>`;
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    colors: '#E53E3E',
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    forceNiceScale: true,
    tickAmount: 6,
    labels: {
      minWidth: 0,
      offsetY: -8,
      offsetX: -5,
      maxWidth: 100,
      style: {
        fontWeight: 400,
      },
      align: 'right',
      formatter: (value) => {
        if (value >= 1000) {
          return millify(value);
        }
        return new Intl.NumberFormat('en-IN', {
          maximumSignificantDigits: 4,
        }).format(value);
      },
    },
  },
});
