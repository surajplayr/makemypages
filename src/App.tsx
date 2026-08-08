/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import ServiceDetail from './pages/ServiceDetail';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <WhatsAppChatbot />
      </div>
    </Router>
  );
}
