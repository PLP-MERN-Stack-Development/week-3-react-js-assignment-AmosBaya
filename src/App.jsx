import { useState } from 'react';
import { Router,Routes,Route } from 'react-router-dom';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Api from './api/apifetch';

import Home from './pages/home';
import TaskPage from './pages/TaskP';
import UniSearch from './pages/University';

function App() {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-gray-100 text-gray-900 overflow-x-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TaskManager" element={<TaskPage />} />
      <Route path="/UniSearch" element={<UniSearch />} />
    </Routes>
</div>

  );
}

export default App; 