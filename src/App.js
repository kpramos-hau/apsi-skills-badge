import {Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import ReportingPage from './pages/ReportingPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />

      <Route path="/DashboardPage" element={<DashboardPage />}>
        {/* Currently Removed, this loads back into the dashboard page, re-rendering a new instance of the sidebar component */}
        {/* <Route path="dashboard" element={<DashboardPage />} />  */}
        <Route path="add" element={<AddPage />} />
        <Route path="edit" element={<EditPage />} />
        <Route path="report" element={<ReportingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
