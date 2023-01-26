import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./components/pages/Home";
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
import Errorpage from "./components/pages/Errorpage";

// import "./components/layout/layout.css"
import Dashboard from './components/pages/Dashboard';
import FormPage from './components/pages/FormPage';
import GridPage from './components/pages/GridPage';


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/form" exact element={<FormPage />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/grid" exact element={<GridPage />} />
            {/* <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} /> */}

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </>
    </Router>
  )
}

export default App