import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Pàgina inicial
import AboutUs from './pages/AboutUs';
import Excursions from './pages/Excursions';
import Contact from './pages/Contact';
import AppVR from './pages/AppVR';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/body.css';

function App() {
  return (
    <div className="page-container">
      <Router basename="/Esquelles">  {/* Afegim basename per a les rutes relatives a /Esquelles */}
        <Header />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />  {/* Ruta per a la pàgina d'inici */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AppVR" element={<AppVR />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
