// Styles
// React components
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from './page/dashboard/Dashboard';
import PageNotFound from './page/page-not-found/PageNotFound';

// Components
import Navbar from './component/navbar/Navbar';

// Interfaces
// Services
// Contexts
import { ThemeContext } from './context/ThemeContext';

// Others
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();
  if(cookies.get('theme') == undefined) cookies.set('theme', 'light', { path: '/' });

  const [theme, setTheme] = useState<string>(cookies.get('theme'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

  );
}

export default App;
