import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import RealisationsPage from './Pages/RealisationsPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import LegalPage from './Pages/LegalPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';



const App = () => {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}; 

export default App;
