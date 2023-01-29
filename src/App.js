import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";



import Errorpage from "./components/pages/Errorpage";


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
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/grid" exact element={<GridPage />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </>
    </Router>
  )
}

export default App