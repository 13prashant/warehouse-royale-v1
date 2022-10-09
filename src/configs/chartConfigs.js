const COLOR_1 = '#003f5c';
const COLOR_2 = '#58508d';
const COLOR_3 = '#bc5090';
const COLOR_4 = '#ff6361';
const COLOR_5 = '#ffa600';

const chartCommonOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent'],
  },
  xaxis: {
    categories: [],
  },
  colors: [COLOR_1, COLOR_2, COLOR_3, COLOR_4, COLOR_5],
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: (val) => `${val}`,
    },
  },
};

export const barChartOptions = {
  ...chartCommonOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '45%',
      endingShape: 'rounded',
    },
  },
};

export const columnChartOptions = {
  ...chartCommonOptions,
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      endingShape: 'rounded',
    },
  },

  yaxis: {
    title: {
      text: 'Score',
    },
  },
};
