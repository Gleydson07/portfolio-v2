import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Skills } from './pages/Skills';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';

import { IntlProvider } from 'react-intl';
import { GlobalStyle } from './styles/theme';

import langPortugueseBrazil from "./lang/pt-br.json";
import langEnglish from "./lang/en-us.json";
import langSpanish from "./lang/es.json";


function App() {
  const [currentLanguageFile, setCurrentLanguageFile] = useState(langEnglish);

  const loadLocale = () => {
    const localeSelected = localStorage.getItem("gsantos@lang") || navigator.language;
  
    if(localeSelected === "pt-BR"){
      setCurrentLanguageFile(langPortugueseBrazil);
    }else if(localeSelected === "es"){
      setCurrentLanguageFile(langSpanish);
    }else{
      setCurrentLanguageFile(langEnglish);
    }    
  }  
  
  useEffect(() => {
    loadLocale();
  }, [])


  return (
    <IntlProvider locale={navigator.language} messages={currentLanguageFile}>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
      {/* <Experience/> */}
      {/* <Skills/> */}
      {/* <Projects/> */}
    </IntlProvider>
  );
}

export default App;
