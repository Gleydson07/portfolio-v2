import React from 'react';
import Header from './components/Header';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/theme';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
