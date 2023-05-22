import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {

  const theme1 = createTheme({
    name: 'theme1',
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  const theme2 = createTheme({
    name: 'theme2',
    palette: {
      primary: {
        main: '#009688',
      },
      secondary: {
        main: '#ff5722',
      },
    },
  });
  const [theme, setTheme] = useState(theme1);

  const toggleTheme = () => {
    setTheme(prev => (prev.name === theme1.name ? theme2 : theme1));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile name="smit_pativala" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
