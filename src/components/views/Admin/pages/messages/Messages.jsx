// Material components
import Grid from '@mui/material/Grid';
// Components
import MessagesCard from '../../components/messages/MessagesCard';
// Helpers
import { randomHsl } from './helpers';
// Css
import './Messages.css';
import messages from '../../../../../mockData/messages.json';

export default function Messages() {
  return (
    <Grid container spacing={2}>
      {messages.map((elm) => (
        <Grid key={elm.id} item xs={12} md={4}>
          <MessagesCard messages={elm} color={randomHsl()} />
        </Grid>
      ))}
    </Grid>
  );
}
