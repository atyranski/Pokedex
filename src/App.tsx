import React from 'react';
import './App.scss';

import Dashboard from './page/dashboard/Dashboard';
import PageNotFound from './page/page-not-found/PageNotFound';

import Navbar from './component/navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
