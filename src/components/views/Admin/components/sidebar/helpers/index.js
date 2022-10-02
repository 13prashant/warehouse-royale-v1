// React icons
import {
  FcConferenceCall,
  FcPositiveDynamic,
  FcServices,
} from 'react-icons/fc';
import { TiMessages } from 'react-icons/ti';

export const menuItems = [
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
    icon: <TiMessages className="sidebar__icon" />,
    path: '/messages',
  },
];
