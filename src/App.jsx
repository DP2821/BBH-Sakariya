import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Darshan from './pages/Darshan';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import HowToReach from './pages/HowToReach';
import Donation from './pages/Donation';
import Preloader from './components/Preloader';
import HolyMemories from './pages/HolyMemories';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="holy-memories" element={<HolyMemories />} />
            <Route path="darshan" element={<Darshan />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="how-to-reach" element={<HowToReach />} />
            <Route path="donate" element={<Donation />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
