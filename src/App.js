import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';
import Gallery from './pages/Gallery';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
