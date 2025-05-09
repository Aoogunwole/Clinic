// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MenClinic from './pages/MenClinic';
import WomenClinic from './pages/WomenClinic';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MessageWidget from './components/MessageWidget';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      
      <div className="scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-clinic" element={<MenClinic />} />
          <Route path="/women-clinic" element={<WomenClinic />} />
        </Routes>
      </div>

      <Footer />
      <MessageWidget />
    </Router>
  );
}

export default App;
