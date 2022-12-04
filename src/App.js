import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Buyer from "./pages/Buyer_Register";
import Seller from "./pages/Seller_Register";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/404";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/buyer" element={<Buyer />} />
                <Route path="/seller" element={<Seller />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
