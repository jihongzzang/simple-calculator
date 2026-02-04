import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import SalaryAfterTax from "./pages/SalaryAfterTax";
import SalaryRaise from "./pages/SalaryRaise";
import RentVsDeposit from "./pages/RentVsDeposit";
import TimeZoneOverlap from "./pages/TimeZoneOverlap";
import "./styles/base.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/salary-after-tax" replace />} />

        {/* Calculators */}
        <Route path="/salary-after-tax" element={<SalaryAfterTax />} />
        <Route path="/salary-raise" element={<SalaryRaise />} />
        <Route path="/rent-vs-deposit" element={<RentVsDeposit />} />
        <Route path="/time-zone-overlap" element={<TimeZoneOverlap />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/salary-after-tax" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
