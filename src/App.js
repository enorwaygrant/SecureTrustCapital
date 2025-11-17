import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import VerifyIdentity from "./pages/VerifyIdentity";
import Products from "./pages/Products";
import AddDetails from "./pages/AddDetails";
import OnTheWay from "./pages/OnTheWay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OnTheWay" element={<OnTheWay />} />
        <Route path="/UnderReview" element={<VerifyIdentity />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/VerifyIdentity" element={<AddDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
