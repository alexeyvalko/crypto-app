import { FC, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createChart, UTCTimestamp } from 'lightweight-charts';
import { CandlestickChart, LineChart } from 'lucide-react';

import { ChartType, daysOptions } from './constants';

import { cn } from '@/utils';

import { Blocker, ToggleGroup, ToggleGroupItem } from '../ui';

import { getBaseLineOptions, getCandlestickOptions, getChartOptions } from './chart-utils';
import { useMatchMedia } from './use-match-media';

import { getCoinOHLC } from '@/api/coingecko-api';
import { REFRESH_INFO_INTERVAL } from '@/config';
import { Route } from '@/routes/coins.$coinId';
import { useTheme } from '@/theme';

const DEFAULT_OHLC_DAYS = 1;
const SEC_IN_MS = 1000;

type ChartProps = {
  className?: string;
};

export const Chart: FC<ChartProps> = ({ className }) => {
  const { coinId } = Route.useParams();
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const [days, setDays] = useState(DEFAULT_OHLC_DAYS);
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);

  const isDesktop = useMatchMedia('(min-width: 768px)');

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['ohlc', coinId, days],
    queryFn: () => getCoinOHLC({ vs_currency: 'usd', id: coinId, days }),
    placeholderData: (prevData) => prevData,
    refetchInterval: REFRESH_INFO_INTERVAL,
  });

  const handleChangeDays = (value: string) => {
    setDays(Number(value) || DEFAULT_OHLC_DAYS);
  };

  const handleChangeChartType = (value: ChartType) => {
    setChartType(value);
  };

  useEffect(() => {
    if (chartRef.current && !!data?.length) {
      const chart = createChart(chartRef.current, getChartOptions(theme, chartType, isDesktop));
      const basePrice = data?.[0]?.[4] ?? 0;

      if (chartType === ChartType.Line) {
        const baselineSeries = chart.addBaselineSeries(getBaseLineOptions(basePrice, isDesktop));
        baselineSeries.setData(
          data.map(([time, , , , close]) => ({
            time: (time / SEC_IN_MS) as UTCTimestamp,
            value: close,
          }))
        );
      } else {
        const candlestickSeries = chart.addCandlestickSeries(getCandlestickOptions(basePrice));
        candlestickSeries.setData(
          data.map(([time, open, high, low, close]) => ({
            time: (time / SEC_IN_MS) as UTCTimestamp,
            close,
            high,
            low,
            open,
          }))
        );
      }

      chart.timeScale().fitContent();

      return () => {
        chart.remove();
      };
    }
  }, [data, theme, chartType, isDesktop]);

  if (!data?.length && !isFetching && !isLoading) {
    return null;
  }

  return (
    <div className={cn('relative', className)}>
      <Blocker isLoading={isFetching || isLoading} />
      <div className="flex flex-wrap justify-center md:justify-end gap-2">
        <ToggleGroup
          type="single"
          className="rounded-md bg-input p-1 hidden md:flex"
          value={chartType}
          onValueChange={handleChangeChartType}
        >
          <ToggleGroupItem value={ChartType.Line} aria-label="line" size="2sm">
            <LineChart size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value={ChartType.Candlestick} aria-label="candlestick chart" size="2sm">
            <CandlestickChart size={16} />
          </ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup
          type="single"
          className="rounded-md bg-input p-1 md:mr-6"
          value={days.toString()}
          onValueChange={handleChangeDays}
        >
          {daysOptions.map((day) => (
            <ToggleGroupItem key={day.value} value={day.value.toString()} aria-label={day.label} size="2sm">
              {day.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div ref={chartRef} className={cn(' flex items-center w-full, h-[250px] md:h-[380px] overflow-hidden mt-6')} />
    </div>
  );
};
