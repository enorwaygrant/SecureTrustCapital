import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddDetails from "./pages/AddDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SecureTrustCapital/ApplyForm" element={<AddDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
