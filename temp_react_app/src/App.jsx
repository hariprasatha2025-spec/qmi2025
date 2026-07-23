import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Organizers from './pages/Organizers';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Schedule from './pages/Schedule';
import HowToReach from './pages/HowToReach';
import Sightseeing from './pages/Sightseeing';
import PastEvents from './pages/PastEvents';
const Placeholder = ({ title }) => (
  <div className="section bg-white text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container">
      <h1 className="heading-lg text-gradient mb-4">{title}</h1>
      <p className="text-muted text-lg">This page is currently being upgraded to our new premium design system.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/how-to-reach" element={<HowToReach />} />
            <Route path="/sightseeing" element={<Sightseeing />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
            <Route path="/gallery" element={<Placeholder title="Gallery" />} />
            <Route path="/awards" element={<Placeholder title="Awards" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
