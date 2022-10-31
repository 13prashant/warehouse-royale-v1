import { useAuthContext } from './hooks/useAuthContext';
import ADashboard from './views/Admin/ADashboard';
import MDashboard from './views/Manager/MDashboard';
import EDashboard from './views/Employee/EDashboard';
import LoginForm from './components/LoginForm';

function App() {
  const { user, isAuthReady } = useAuthContext();

  const role = localStorage.getItem('warehouse_user_role');

  return isAuthReady && user && role === 'admin' ? (
    <ADashboard />
  ) : role === 'manager' ? (
    <MDashboard />
  ) : role === 'employee' ? (
    <EDashboard />
  ) : (
    <LoginForm />
  );
}

export default App;
