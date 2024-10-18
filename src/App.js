import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
