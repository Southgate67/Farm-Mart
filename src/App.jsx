import React,{useEffect} from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Tracking from "./Components/Tracking";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/tracking" element={<Tracking />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  
      <Footer />
    </div>
  );
}

export default App;
