import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './Adashboard.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Gamesetup from './pages/gamesetup/Gamesetup';

function Adashboard() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          {/* <Switch> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/gamesetup" element={<Gamesetup />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default Adashboard;