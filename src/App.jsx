import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./components/Dashboard";
import CarDetails from "./components/CarDetails";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import HighlightedCars from "./components/HighlightedCarsPage";
import StatisticsPage from "./components/StatisticsPage";

function App() {
  return (
    <Router basename={import.meta.env.VITE_BASE_PATH || '/'}>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/highlighted-cars" element={<HighlightedCars />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
