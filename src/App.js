import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/style.css'


import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtworkDetails from "./pages/Artwork";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/artwork/:id" element={<ArtworkDetails/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
