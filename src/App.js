import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/DashboardPage' element={<DashboardPage />}/>
    </Routes>
  );
}

export default App;
