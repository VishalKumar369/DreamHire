import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Roles from './components/Roles';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './style.css';


function App() {
  return (
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.8
        }
      }
    }}>
      <Router>
        <Header />
        <Hero/>
        <Roles />
        <Testimonials />
        <Footer />
      </Router>
    </motion.div>
  );
}

export default App;
