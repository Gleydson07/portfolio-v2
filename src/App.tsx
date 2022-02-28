import React from 'react';
import Header from './components/Header';

import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';

import { GlobalStyle } from './styles/theme';


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
