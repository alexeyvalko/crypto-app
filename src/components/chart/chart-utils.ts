import {
  BaselineStyleOptions,
  CandlestickStyleOptions,
  ColorType,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
} from 'lightweight-charts';

import { ChartType } from './constants';

import { getFixedPrice } from '@/utils/get-fixed-price';

import { ThemeMode } from '@/theme/theme-provider/types';

export const getChartOptions = (theme: ThemeMode, chartType: ChartType, isDesktop = false) => {
  const chartOptions: DeepPartial<TimeChartOptions> = {
    autoSize: true,
    handleScale: false,
    handleScroll: false,
    localization: {
      priceFormatter: (price: number) => `$${getFixedPrice(Math.max(price, 0)).price}`,
    },
    layout: {
      textColor: theme === ThemeMode.DARK ? 'white' : 'black',
      background: { color: 'transparent', type: ColorType.Solid },
    },
    crosshair: {
      mode: 0,
    },
    timeScale: {
      fixLeftEdge: true,
      fixRightEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      visible: isDesktop,
      borderVisible: chartType === ChartType.Candlestick,
      rightOffset: 2,
      timeVisible: true,
    },
    rightPriceScale: {
      visible: isDesktop,
      borderVisible: chartType === ChartType.Candlestick,
    },
    grid: {
      horzLines: {
        visible: false,
      },
      vertLines: {
        visible: false,
      },
    },
  };

  return chartOptions;
};

export const getBaseLineOptions = (basePrice: number, isDesktop = false) => {
  const baseLinOptions: DeepPartial<BaselineStyleOptions & SeriesOptionsCommon> = {
    baseValue: { type: 'price', price: basePrice },
    topLineColor: 'rgba( 38, 166, 154, 1)',
    topFillColor1: 'rgba( 38, 166, 154, 0.28)',
    topFillColor2: 'rgba( 38, 166, 154, 0.05)',
    bottomLineColor: 'rgba( 239, 83, 80, 1)',
    bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
    bottomFillColor2: 'rgba( 239, 83, 80, 0.28)',
    lastPriceAnimation: isDesktop ? 1 : 0,

    priceFormat: { type: 'price', minMove: getFixedPrice(basePrice).minMove },
  };

  return baseLinOptions;
};

export const getCandlestickOptions = (basePrice: number) => {
  const candlestickOptions: DeepPartial<CandlestickStyleOptions & SeriesOptionsCommon> = {
    upColor: '#26a69a',
    downColor: '#ef5350',
    borderVisible: false,
    wickUpColor: '#26a69a',
    wickDownColor: '#ef5350',
    priceFormat: { type: 'price', minMove: getFixedPrice(basePrice).minMove },
  };

  return candlestickOptions;
};
