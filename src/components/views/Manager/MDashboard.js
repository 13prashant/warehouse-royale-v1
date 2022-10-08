import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MyTeam from './pages/myTeam/MyTeam';
import RecruitmentRoom from './pages/recruitmentRoom/RecruitmentRoom';
import Messenger from './pages/messenger/Messenger';
import OperationRoom from './pages/operationRoom/OperationRoom';
import About from './pages/about/About';

export default function MDashboard() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-team" element={<MyTeam />} />
        <Route exact path="/recruitment-room" element={<RecruitmentRoom />} />
        <Route exact path="/messenger" element={<Messenger />} />
        <Route exact path="/operation-room" element={<OperationRoom />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
