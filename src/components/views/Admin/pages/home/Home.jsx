import { useEffect, useState } from 'react';
// Material Components
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Components
import Chart from '../../components/chart/Chart';
// Css
import './Home.css';
import pointData from '../../../../../mockData/point-chart-data.json';

const metricItems = ['Point', 'IRI', 'No. of Employees', 'Individual Turnover'];
const roundItems = [1, 2, 3, 4];

export default function Home() {
  const [pMetric, setPMetric] = useState('Point');
  const [round, setRound] = useState(1);
  const [chartData, setChartData] = useState(pointData);

  useEffect(() => {
    switch (pMetric) {
      case 'Point':
        setChartData(pointData);
        break;
      case 'IRI':
        setChartData([]);
        break;
      case 'No. of Employees':
        setChartData([]);
        break;
      case 'Individual Turnover':
        setChartData([]);
        break;

      default:
        setChartData([]);
    }
  }, [pMetric]);

  return (
    <div className="home">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Metric</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={pMetric}
          label="Metric"
          onChange={(e) => setPMetric(e.target.value)}
        >
          {metricItems.map((elm) => (
            <MenuItem key={elm} value={elm}>
              {elm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Round</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={round}
          label="Round"
          onChange={(e) => setRound(e.target.value)}
        >
          {roundItems.map((elm) => (
            <MenuItem key={elm} value={elm}>
              {elm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="home__chart">
        <Chart data={chartData} chartType="bar" />
      </div>
    </div>
  );
}
