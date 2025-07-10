import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (!load) {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const yOffset = 80; // adjust to your navbar height
const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }
}, [load]);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
