import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Dashboard from './components/Dashboard';
import CarDetails from './components/CarDetails';
import About from './components/About'; // Create an About component as needed

function App() {

  return (
    <>
      <Router basename='car-analytics'>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
