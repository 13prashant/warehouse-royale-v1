import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Gamesetup from './pages/gamesetup/Gamesetup';
import Layout from './components/layout/Layout';

function Adashboard() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/game-setup" element={<Gamesetup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Adashboard;
