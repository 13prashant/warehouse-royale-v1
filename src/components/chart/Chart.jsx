import ApexChart from 'react-apexcharts';
import {
  barChartOptions,
  columnChartOptions,
} from '../../configs/chartConfigs';
import './Chart.css';

export default function Chart({ type, chartType, series, xAxis }) {
  const getChartConfig = (type) => {
    switch (type) {
      case 'bar':
        return barChartOptions;
      case 'column':
        return columnChartOptions;
      default:
        return columnChartOptions;
    }
  };

  let options = getChartConfig(type);

  options.xaxis.categories = xAxis;

  return (
    <ApexChart
      options={options}
      series={series}
      type={chartType}
      height={350}
    />
  );
}
