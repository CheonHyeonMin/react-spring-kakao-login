import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Callback from './components/Callback'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/oauth/kakao/login' element={<Callback />} />
      </Routes>
    </div>
  );
}

export default App;
