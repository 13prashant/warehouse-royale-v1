import { useState } from 'react';
import ADashboard from './views/Admin/ADashboard';
import MDashboard from './views/Manager/MDashboard';
import EDashboard from './views/Employee/EDashboard';
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState('employee');

  return (
    <>
      {user === 'admin' ? (
        <ADashboard />
      ) : user === 'manager' ? (
        <MDashboard />
      ) : user === 'employee' ? (
        <EDashboard />
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
