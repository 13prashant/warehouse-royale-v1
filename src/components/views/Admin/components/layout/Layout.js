import { Outlet } from 'react-router-dom';
// Material components
import Container from '@mui/material/Container';
// Components
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
// Css
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout__topbar">
        <Topbar />
      </div>
      <div className="layout__bottom">
        <div className="layout__sidebar">
          <Sidebar />
        </div>
        <div className="layout__outlet">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
}
