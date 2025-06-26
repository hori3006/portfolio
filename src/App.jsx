// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop"; 
import MaxTracker from "./components/MaxTracker"; 
import SalaryTracker from "./components/SalaryTracker";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "180px", padding: "1rem", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/max-tracker" element={<MaxTracker />} />
            <Route path="/salary-tracker" element={<SalaryTracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
