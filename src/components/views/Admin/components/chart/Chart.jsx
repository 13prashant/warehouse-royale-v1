import ApexChart from 'react-apexcharts';
import { getRoundNames } from './helpers';
import './Chart.css';

export default function Chart({ data, chartType }) {
  const config = {
    series: data.map((elm) => {
      return {
        name: elm.name,
        data: elm.scores,
      };
    }),
    options: {
      chart: {
        type: chartType,
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
      xaxis: {
        categories: getRoundNames(data),
      },
      yaxis: {
        title: {
          text: 'Score',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return 'Score ' + val;
          },
        },
      },
    },
  };

  if (!data.length) {
    return <h3>No data</h3>;
  }

  return (
    <ApexChart
      options={config.options}
      series={config.series}
      type={chartType}
      height={350}
    />
  );
}
