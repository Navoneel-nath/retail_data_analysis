import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Analytics from './pages/Analytics';
import FileSubmit from './pages/FileSubmit';
import LandingPage from './pages/LandingPage';

function App() {


  return (
    <Router>
      
      <Routes>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/fileSubmit" element={<FileSubmit />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/fileSubmit" />} />
      </Routes>
  </Router>

  );
}

export default App;