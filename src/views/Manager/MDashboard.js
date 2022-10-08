import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Layout from '../../components/layout/Layout';
// Pages
import Home from './pages/home/Home';
import MyTeam from './pages/myTeam/MyTeam';
import RecruitmentRoom from '../../components/views/Manager/pages/recruitmentRoom/RecruitmentRoom';
import Messenger from '../../components/views/Manager/pages/messenger/Messenger';
import OperationRoom from '../../components/views/Manager/pages/operationRoom/OperationRoom';
import About from './pages/about/About';
// Configs
import { mDashboardSidebarConfig } from '../../configs/sidebarConfigs';

export default function MDashboard() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout sidebarConfig={mDashboardSidebarConfig} />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-team" element={<MyTeam />} />
          <Route exact path="/recruitment-room" element={<RecruitmentRoom />} />
          <Route exact path="/messenger" element={<Messenger />} />
          <Route exact path="/operation-room" element={<OperationRoom />} />
          <Route exact path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
