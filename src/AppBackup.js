import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import ADashboard from './components/views/Admin/ADashboard';
import LoginForm from './components/LoginForm';
import { emailPasswordAuth } from './database/auth';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const isManager = false;

  if (!user && window.localStorage.admin) {
    setUser(window.localStorage.admin);
  }

  const Login = (details) => {
    emailPasswordAuth(details.email, details.password, setUser, setError);
  };

  // eslint-disable-next-line
  const Logout = () => {
    setUser('');
  };

  return (
    <>
      {user ? (
        <DndProvider backend={HTML5Backend}>
          <ADashboard />
        </DndProvider>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}

export default App;
