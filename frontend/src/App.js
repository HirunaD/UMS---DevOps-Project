import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ marginBottom: '90px' }}>User Management System</h1>
      <button className="user-btn" onClick={() => navigate('/users')}>Welcome</button>
      </header>
    </div>
  );
}

export default App;
