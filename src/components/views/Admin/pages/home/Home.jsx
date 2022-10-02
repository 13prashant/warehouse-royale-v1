import { useEffect, useState } from 'react';
// Material Components
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Components
import Chart from '../../components/chart/Chart';
// Helpers
import iriChartData from './helpers/iri-chart-data.json';
// Css
import './Home.css';

const metricItems = ['Point', 'IRI', 'No. of Employees', 'Individual Turnover'];
const roundItems = [1, 2, 3, 4];

export default function Home() {
  const [pMetric, setPMetric] = useState('Point');
  const [round, setRound] = useState(1);
  const [chartData, setChartData] = useState(iriChartData);

  useEffect(() => {
    switch (pMetric) {
      case 'Point':
        setChartData(iriChartData);
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
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Metric</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={pMetric}
          onChange={(e) => setPMetric(e.target.value)}
        >
          {metricItems.map((elm) => (
            <MenuItem key={elm} value={elm}>
              {elm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Round</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={round}
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
