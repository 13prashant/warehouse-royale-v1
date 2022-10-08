import ADashboard from './views/Admin/ADashboard';
import MDashboard from './views/Manager/MDashboard';
import LoginForm from './components/LoginForm';

function App() {
  const user = 'admin';

  return (
    <>
      {user === 'admin' ? (
        <ADashboard />
      ) : user === 'manager' ? (
        <MDashboard />
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
