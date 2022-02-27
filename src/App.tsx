import React from 'react';
import Header from './components/Header';
import { Hero } from './pages/Hero';
import { About } from './pages/About';

import { GlobalStyle } from './styles/theme';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
    </>
  );
}

export default App;
