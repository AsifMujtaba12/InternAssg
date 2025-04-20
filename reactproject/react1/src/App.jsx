// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import components

function App() {
  return (
    <Router>
      {/* Navbar/Header Section */}
      <header>
        <nav className="navbar">
          <div className="logo">Cafe 24</div>
          <ul className="nav-links">
            {/* Navigation Links */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/* About Route */}
        <Route path="/about" element={<About/>} />
        {/* Menu Route */}
        <Route path="/menu" element={<Menu />} />
        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
      
    </Router>
  );
}
export default App;
