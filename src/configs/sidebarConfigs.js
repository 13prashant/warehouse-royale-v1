import {
  FcConferenceCall,
  FcPositiveDynamic,
  FcServices,
} from 'react-icons/fc';
import { TiMessages } from 'react-icons/ti';
import { getRandomHsl } from '../utils/functions/getRandomHsl';

export const aDashboardSidebarConfig = [
  {
    item: 'Home',
    icon: <FcPositiveDynamic className="sidebar__icon" />,
    path: '/',
  },
  {
    item: 'Manage Users',
    icon: <FcConferenceCall className="sidebar__icon" />,
    path: '/users',
  },
  {
    item: 'Game Setup',
    icon: <FcServices className="sidebar__icon" />,
    path: '/game-setup',
  },
  {
    item: 'Messages',
    icon: <TiMessages className="sidebar__icon" color={getRandomHsl()} />,
    path: '/messages',
  },
];

export const mDashboardSidebarConfig = [
  {
    item: 'Performance Metric',
    icon: <FcPositiveDynamic className="sidebar__icon" />,
    path: '/',
  },
  {
    item: 'My Team',
    icon: <FcConferenceCall className="sidebar__icon" />,
    path: '/my-team',
  },
  {
    item: 'Recruitment Room',
    icon: <FcServices className="sidebar__icon" />,
    path: '/recruitment-room',
  },
  {
    item: 'Messenger',
    icon: <TiMessages className="sidebar__icon" color={getRandomHsl()} />,
    path: '/messenger',
  },
  {
    item: 'Operation Room',
    icon: <TiMessages className="sidebar__icon" />,
    path: '/operation-room',
  },
  {
    item: 'About',
    icon: <TiMessages className="sidebar__icon" />,
    path: '/about',
  },
];
