import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigationbar";
import AttendancePage from "./Pages/Attendence";
import EmployesPage from "./Pages/Employes";
import ShedulePage from "./Pages/Shedule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Attendence" element={<AttendancePage />} />
        <Route path="/" element={<EmployesPage />} />
        <Route path="/Employes" element={<EmployesPage />} />
        <Route path="/Shedule" element={<ShedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
