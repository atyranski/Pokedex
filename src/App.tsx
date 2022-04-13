import React from 'react';
import './App.css';

import Dashboard from './page/dashboard/Dashboard';
import PageNotFound from './page/page-not-found/PageNotFound';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
