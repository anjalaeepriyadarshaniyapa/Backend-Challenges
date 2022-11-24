import { FcNews } from 'react-icons/fc';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navigationbar';

import AttendancePage from './Pages/Attendence';
import DashboardPage from './Pages/Dashboard';
import EmployesPage from './Pages/Employes';
import ShedulePage from './Pages/Shedule';

function App() {
  return (
   
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/Attendence" element={<AttendancePage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Employes" element={<EmployesPage />} />
          <Route path="/Shedule" element={<ShedulePage />} />
      </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
